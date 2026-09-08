function replay_saved_case(caseName,newName)
% Re-run the exact stored mesh/configuration/initial guess in a new directory.
% Requires the original result folder and SU2 8.5.0. No CAD fitting is done.
arguments
    caseName (1,:) char
    newName (1,:) char
end
assert(~isempty(regexp(caseName,'^[A-Za-z0-9_]+$','once')));
assert(~isempty(regexp(newName,'^[A-Za-z0-9_]+$','once')));
root=fileparts(fileparts(mfilename('fullpath')));
src=fullfile(root,'results',caseName);dst=fullfile(root,'results',newName);
assert(isfolder(src),'Original saved case is missing');
assert(~isfolder(dst),'Choose a new output name to preserve existing evidence');
exe=getenv('SU2_CFD_EXE');
if isempty(exe),exe=fullfile(root,'..','..','work','su2','bin','bin','SU2_CFD.exe');end
assert(isfile(exe),'Set SU2_CFD_EXE to the SU2 8.5.0 executable');
mkdir(dst);
for name={'case.cfg','mesh.su2','initial.csv'}
    p=fullfile(src,name{1});if isfile(p),copyfile(p,fullfile(dst,name{1}));end
end
old=pwd;restore=onCleanup(@()cd(old));cd(dst);
fprintf('Replaying %s in %s\n',caseName,newName);
start=tic;status=system(sprintf('"%s" -t 4 case.cfg > solver.log 2>&1',exe));
assert(status==0,'SU2 failed; inspect the new solver.log');
T=readtable('history.csv','VariableNamingRule','preserve');disp(T(end,:));
R=struct('replay_of',caseName,'runtime_s',toc(start),'iterations',height(T));
f=fopen('replay.json','w');fprintf(f,'%s',jsonencode(R,PrettyPrint=true));fclose(f);
end
