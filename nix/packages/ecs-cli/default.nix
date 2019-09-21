{ stdenv, fetchurl}:

stdenv.mkDerivation rec {
  name = "amazon-ecs-cli-${version}";
  version = "1.14.0";

  src = if builtins.currentSystem == "x86_64-darwin" then
    fetchurl {
      url = "https://s3.amazonaws.com/amazon-ecs-cli/ecs-cli-darwin-amd64-v${version}";
      sha256 = "71d9eefb43712c3b8a64526d107e8b581c5c678de19e113d26101a64b0c3c2d6";
    }
  else
    fetchurl {
      url = "https://s3.amazonaws.com/amazon-ecs-cli/ecs-cli-linux-amd64-v${version}";
      sha256 = "f43d0501760d3b00daafa244c869e53fd48ba87e3f799f39eacb00af51921bd4";
    };

  unpackPhase = ":";

  installPhase =
    ''
      mkdir -p $out/bin
      cp $src $out/bin/ecs-cli
      chmod +x $out/bin/ecs-cli
    '';  # */

  meta = with stdenv.lib; {
    homepage = https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ECS_CLI.html;
    description = "The Amazon ECS command line interface";
    longDescription = "The Amazon Elastic Container Service (Amazon ECS) command line interface (CLI) provides high-level commands to simplify creating, updating, and monitoring clusters and tasks from a local development environment.";
    license = licenses.asl20;
    platforms = [ "x86_64-linux" "x86_64-darwin" ];
  };
}
