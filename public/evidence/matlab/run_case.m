function result = run_case(name,geometry,U,alpha,niter,model,seed)
% MATLAB driver for SU2 8.5.0 finite-volume CFD. Not a MATLAB-native solver.
% The geometry name refers to a traceable section of the SolidWorks STL.
if nargin<6,model='SST';end
if nargin<7,seed='';end
transition=strcmp(model,'SST_LM');solverModel=model;if transition,solverModel='SST';end
root=fileparts(fileparts(mfilename('fullpath')));
exe=getenv('SU2_CFD_EXE');
if isempty(exe),exe=fullfile(root,'..','..','work','su2','bin','bin','SU2_CFD.exe');end
assert(isfile(exe),'Set SU2_CFD_EXE to the SU2 8.5.0 executable');
caseDir=fullfile(root,'results',name);if ~isfolder(caseDir),mkdir(caseDir);end
mesh=fullfile(root,'geometry',geometry,'mesh.su2');
qualityPath=fullfile(root,'validation','section_mesh_quality.json');
assert(isfile(qualityPath),'Run scripts/audit_section_meshes.py before solving');
Q=jsondecode(fileread(qualityPath));q=Q(strcmp({Q.geometry},geometry));
assert(~isempty(q),'This mesh has no quality record; audit it before solving');
assert(q.negative_or_zero_area==0 && q.minSICN_min>0,'Rejected mesh: repair and audit it before solving');
copyfile(mesh,fullfile(caseDir,'mesh.su2'));
if ~isempty(seed)
    script=fullfile(root,'scripts','seed_restart.py');
    source=fullfile(root,'results',seed,'restart.csv');
    target=fullfile(caseDir,'initial.csv');
    status=system(sprintf('python "%s" "%s" "%s" "%s"',script,source,mesh,target));
    assert(status==0,'Initial-field interpolation failed');
end
f=fopen(fullfile(caseDir,'case.cfg'),'w');c=onCleanup(@()fclose(f));
fprintf(f,'SOLVER= INC_RANS\nKIND_TURB_MODEL= %s\nMATH_PROBLEM= DIRECT\n',solverModel);
if isempty(seed),fprintf(f,'RESTART_SOL= NO\n');else,fprintf(f,'RESTART_SOL= YES\nSOLUTION_FILENAME= initial\nREAD_BINARY_RESTART= NO\n');end
if transition,fprintf(f,'KIND_TRANS_MODEL= LM\nLM_OPTIONS= MENTER_LANGTRY\n');end
fprintf(f,'INC_DENSITY_MODEL= CONSTANT\nINC_ENERGY_EQUATION= NO\nINC_DENSITY_INIT= 1.225\n');
fprintf(f,'INC_VELOCITY_INIT= (%.12g,%.12g,0)\nINC_NONDIM= INITIAL_VALUES\n',U*cosd(alpha),U*sind(alpha));
fprintf(f,'VISCOSITY_MODEL= CONSTANT_VISCOSITY\nMU_CONSTANT= 1.7894e-5\n');
fprintf(f,'FREESTREAM_TURBULENCEINTENSITY= 0.001\nFREESTREAM_TURB2LAMVISCRATIO= 1\n');
fprintf(f,'REF_LENGTH= 0.2\nREF_AREA= 0.2\nREF_ORIGIN_MOMENT_X= 0.05\nREF_ORIGIN_MOMENT_Y= 0\nREF_ORIGIN_MOMENT_Z= 0\n');
fprintf(f,'MARKER_HEATFLUX= (airfoil,0)\nMARKER_FAR= (farfield)\nMARKER_PLOTTING= (airfoil)\nMARKER_MONITORING= (airfoil)\n');
fprintf(f,'NUM_METHOD_GRAD= WEIGHTED_LEAST_SQUARES\nCFL_NUMBER= 5\nCFL_ADAPT= YES\nCFL_ADAPT_PARAM= (0.5,1.2,1,20,0.1,100)\n');
fprintf(f,'CONV_NUM_METHOD_FLOW= FDS\nMUSCL_FLOW= YES\nSLOPE_LIMITER_FLOW= VENKATAKRISHNAN\nVENKAT_LIMITER_COEFF= 0.05\nTIME_DISCRE_FLOW= EULER_IMPLICIT\n');
fprintf(f,'CONV_NUM_METHOD_TURB= SCALAR_UPWIND\nMUSCL_TURB= NO\nTIME_DISCRE_TURB= EULER_IMPLICIT\n');
fprintf(f,'LINEAR_SOLVER= FGMRES\nLINEAR_SOLVER_PREC= ILU\nLINEAR_SOLVER_ITER= 15\nLINEAR_SOLVER_ERROR= 0.01\n');
fprintf(f,'ITER= %d\nCONV_FIELD= RMS_PRESSURE\nCONV_RESIDUAL_MINVAL= -9\nCONV_STARTITER= 100\n',niter);
fprintf(f,'MESH_FILENAME= mesh.su2\nMESH_FORMAT= SU2\n');
fprintf(f,'SCREEN_OUTPUT= (INNER_ITER,RMS_PRESSURE,RMS_VELOCITY-X,RMS_VELOCITY-Y,LIFT,DRAG)\n');
fprintf(f,'HISTORY_OUTPUT= (ITER,RMS_RES,AERO_COEFF)\nCONV_FILENAME= history\nTABULAR_FORMAT= CSV\n');
fprintf(f,'VOLUME_OUTPUT= (COORDINATES,SOLUTION,PRIMITIVE)\n');
fprintf(f,'OUTPUT_FILES= (RESTART_ASCII,PARAVIEW,SURFACE_PARAVIEW,SURFACE_CSV)\nOUTPUT_WRT_FREQ= %d\n',niter);
fprintf(f,'VOLUME_FILENAME= flow\nSURFACE_FILENAME= surface\nRESTART_FILENAME= restart\n');
clear c
old=pwd;back=onCleanup(@()cd(old));cd(caseDir);
fprintf('Starting %s: %.1f m/s, %.1f deg, %s, %d iterations\n',name,U,alpha,model,niter);
start=tic;[status,out]=system(sprintf('"%s" -t 4 case.cfg > solver.log 2>&1',exe));elapsed=toc(start);
if status~=0,error('CFD failed: %s. Inspect %s. %s',name,fullfile(caseDir,'solver.log'),out);end
T=readtable('history.csv','VariableNamingRule','preserve');
disp(T(end,:));result=struct('name',name,'speed_mps',U,'alpha_deg',alpha,'geometry',geometry,'turbulence',model,'runtime_s',elapsed,'iterations',height(T));
result.columns=T.Properties.VariableNames;result.final=table2array(T(end,:));
result.last100_range=max(table2array(T(max(1,end-99):end,:)),[],1)-min(table2array(T(max(1,end-99):end,:)),[],1);
f=fopen('result.json','w');fprintf(f,'%s',jsonencode(result,PrettyPrint=true));fclose(f);
fprintf('Finished %s in %.1f s\n',name,elapsed);
end
