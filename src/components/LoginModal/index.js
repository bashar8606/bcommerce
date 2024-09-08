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
import { useTranslations } from "next-intl";

export function LoginModal() {
  const t = useTranslations('Index')
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="btn btn-grad btn-lg">{t('LOGIN')}</button>
      </DialogTrigger>
      <DialogContent className="h-screen md:h-auto sm:max-w-[410px] p-10 rounded-1">
        <DialogHeader>
          <div className="">
            <p className=" text-black text-sm font-medium ">{t('WelcomeBack')}!</p>
            <h3 className=" text-black text-2xl font-semibold ">
              {t('signInHeader')}
            </h3>
          </div>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="">
            <Label htmlFor="name" >
              {t('Name')}
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className=" gap-4">
            <Label htmlFor="username" >
              {t('Username')}
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
            />
          </div>
        </div>

        <div className=" ">
          <button className="btn btn-primary btn-lg w-full mb-4 ">{t('LOGIN')}</button>
          <button className="btn btn-primary btn-lg w-full mb-4 "> {t('LogInWithGoogle')} </button>

          <p className=" text-center text-black text-sm font-medium">
            {t('DontHaveAnAccount')}{" "}
            <Link className="text-teal-500 text-sm font-semibold  ">
              {t('SignUp')}
            </Link>{" "}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
