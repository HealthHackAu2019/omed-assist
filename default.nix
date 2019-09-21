with (import ./nix/packages); stdenv.mkDerivation rec {
  name = "env";

  env = buildEnv {
    name = name;
    paths = buildInputs;
  };

  buildInputs = if builtins.currentSystem == "x86_64-darwin"
    then [
        nodejs-10_x
        python36Full
        python36Packages.pip
        python36Packages.virtualenv
    ]
    else [
        nodejs-10_x
        python36Full
        python36Packages.matplotlib
        python36Packages.numpy
        python36Packages.pandas
        python36Packages.pip
        python36Packages.scikitlearn
        python36Packages.scipy
        python36Packages.tqdm
        python36Packages.virtualenv
    ];

  shellHook = ''
    export DOTNET_SKIP_FIRST_TIME_EXPERIENCE=true
    export SOURCE_DATE_EPOCH=$(date +%s)
  '';
}
