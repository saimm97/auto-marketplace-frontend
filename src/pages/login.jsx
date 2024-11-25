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
import  userSignInSchema from "@/lib/schema.js";
import { useFormik } from "formik";
import axios from "axios";

export default function Login() {

  const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:3001/',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: userSignInSchema,
    onSubmit: values => {
      console.log(values);
      axiosInstance.post('http://127.0.0.1:3001/login', { user: values })
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
      <div className="flex justify-center md:mt-12 lg:mt-12">
        <form onSubmit={formik.handleSubmit}>
          <Card className="w-[350px]">
            <CardHeader>
              <CardDescription>Please Login to Conitnue</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col space-y-1.5 ">
                  <Label htmlFor="name">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />

                  {formik.errors.email && (
                    <div className="text-red-600 text-sm">{formik.errors.email}</div>
                  )}
                </div>
                <div className="flex flex-col space-y-1.5 mt-7">
                  <Label htmlFor="name">Password</Label>
                  <Input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  {formik.errors.password && (
                    <div className="text-red-600 text-sm">
                      {formik.errors.password}
                    </div>
                  )}
                </div>              
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button type="submit"> Login </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </div>
  );
}
