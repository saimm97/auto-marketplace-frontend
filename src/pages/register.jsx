"use client"
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
import axios from "axios";
import GoogleLogo from '@/public/js/google_logo.jsx';
import { handleSignIn, handleSignOut } from '../lib/auth';


export default function Register() {

  const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:3001/',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: userSchema,
    onSubmit: values => {
      console.log(values);
      axiosInstance.post('http://127.0.0.1:3001/signup', { user: values })
        .then(res => {
          console.log(res);
          console.log(res.data);
          window.location = "/"
        })

        .catch((error) => {
          console.log("Something went wrong" + error.message)
        })
    }
  });

  return (
    <div>
      <Link
        href="/"
        className="mr-6 hidden lg:flex justify-center mt-14"
        prefetch={false}
      >
        <Image src={Logo} height={40} width={180} alt="Image not loaded" />
      </Link>
      <div className="flex justify-center md:mt-12 lg:mt-11">
        <form onSubmit={formik.handleSubmit}>
          <Card className="w-[350px] sm:w-[400px] md:w-[450px] lg:w-[500px] min-h-[500px] sm:min-h-[550px] md:min-h-[600px] mb-4">
            <CardHeader className="pb-0">
              <CardTitle className="text-center text-xl">Register</CardTitle>
              <CardDescription className="text-center text-lg">Complete your Registration</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 flex-1">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="name" className="text-base font-medium">Username</Label>
                <Input
                  id="name"
                  placeholder="Enter your username"
                  name="name"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  className="h-12 text-base"
                />
                {formik.errors.name && (
                  <div className="text-red-600 text-sm mt-1">{formik.errors.name}</div>
                )}
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="email" className="text-base font-medium">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="h-12 text-base"
                />

                {formik.errors.email && (
                  <div className="text-red-600 text-sm mt-1">{formik.errors.email}</div>
                )}
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="password" className="text-base font-medium">Password</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className="h-12 text-base"
                />
                {formik.errors.password && (
                  <div className="text-red-600 text-sm mt-1">
                    {formik.errors.password}
                  </div>
                )}
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="confirmPassword" className="text-base font-medium">Confirm Password</Label>
                <Input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                  className="h-12 text-base"
                />
                {formik.errors.confirmPassword && (
                  <div className="text-red-600 text-sm mt-1">
                    {formik.errors.confirmPassword}
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4 pt-6">
              <div className="flex justify-between w-full">
                <Button variant="outline" className="flex-1 mr-2 h-12 text-base">Cancel</Button>
                <Button type="submit" className="flex-1 ml-2 h-12 text-base">Register</Button>
              </div>
              <div className="w-full mt-8">
                <Button
                  variant="outline"
                  onClick={handleSignIn}
                  className="w-full h-12 text-base"
                >
                  <GoogleLogo />
                  Sign In with Google
                </Button>
              </div>
            </CardFooter>
          </Card>
        </form>
      </div>
    </div>
  );
}
