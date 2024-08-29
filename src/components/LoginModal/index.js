import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "../Link";

export function LoginModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="btn btn-grad btn-lg">Login</button>
      </DialogTrigger>
      <DialogContent className="h-screen md:h-auto sm:max-w-[410px] p-10 rounded-1">
        <DialogHeader>
          <div className="">
            <p className=" text-black text-sm font-medium ">Welcome back!</p>
            <h3 className=" text-black text-2xl font-semibold ">
              Sign in to your account
            </h3>
          </div>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="">
            <Label htmlFor="name" >
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className=" gap-4">
            <Label htmlFor="username" >
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
            />
          </div>
        </div>

        <div className=" ">
          <button className="btn btn-primary btn-lg w-full mb-4 ">Login</button>
          <button className="btn btn-primary btn-lg w-full mb-4 "> Log in with Google  </button>

          <p className=" text-center text-black text-sm font-medium">
            Don’t have an account?{" "}
            <Link className="text-teal-500 text-sm font-semibold  ">
              Sign up
            </Link>{" "}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
