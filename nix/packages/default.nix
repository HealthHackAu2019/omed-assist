let
  overlay = self: super: {
    dotnet-sdk = self.callPackage ./dotnet-sdk {};
    ecs-cli = self.callPackage ./ecs-cli {};
    tmux-up = self.callPackage ./tmux-up {};
  };
in
import (
  builtins.fetchTarball {
    url = https://releases.nixos.org/nixos/19.03/nixos-19.03.172760.e8cc0692fc1/nixexprs.tar.xz;
  }
) {
  overlays = [overlay];
}
