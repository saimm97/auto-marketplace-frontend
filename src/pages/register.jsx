import * as React from "react";
import "../app/globals.css";
import Logo from "@/public/images/wheel_ventures_logo.png";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";
import userSchema from "@/lib/schema.js";
import { useFormik } from "formik";

export default function Register() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: userSchema,
    onSubmit: async (values) => {
      // Handle form submission (e.g., API call)
      // await new Promise((resolve) => setTimeout(resolve, 1000));
    },
  });

  const { errors, touched, values, handleSubmit, handleChange } = formik;

  return (
    <div>
      <Link
        href="/"
        className="mr-6 hidden lg:flex justify-center mt-14"
        prefetch={false}
      >
        <Image src={Logo} height={40} width={180} alt="Image not loaded" />
      </Link>
      <div className="flex justify-center md:mt-12 lg:mt-12">
        <form onSubmit={handleSubmit}>
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Register</CardTitle>
              <CardDescription>Complete your Registration</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Username</Label>
                  <Input
                    id="name"
                    placeholder="Username"
                    value={values.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <div className="text-red-600 text-sm">{errors.name}</div>
                  )}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                  />

                  {errors.email && (
                    <div className="text-red-600 text-sm">{errors.email}</div>
                  )}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Password</Label>
                  <Input
                    type="password"
                    id="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                  />
                  {errors.password && (
                    <div className="text-red-600 text-sm">
                      {errors.password}
                    </div>
                  )}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Confirm Password</Label>
                  <Input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    value={values.confirmPassword}
                    onChange={handleChange}
                  />
                  {errors.confirmPassword && (
                    <div className="text-red-600 text-sm">
                      {errors.confirmPassword}
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button type="submit"> Register </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </div>
  );
}
