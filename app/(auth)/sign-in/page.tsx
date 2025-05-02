"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { signInSchema } from "@/lib/auth-schema";


export default function SigninPage() {
	// 1. Define your form.
	const form = useForm<z.infer<typeof signInSchema>>({
		resolver: zodResolver(signInSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof signInSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}

	return (
		<div className="flex w-screen h-screen items-center">
			<Card className="w-full max-w-xs md:max-w-sm mx-auto">
				<CardHeader>
					<CardTitle>
						<p className="text-2xl">Sign In</p>
					</CardTitle>
					<CardDescription>Sign in to get started</CardDescription>
				</CardHeader>
				<CardContent>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input placeholder="example@email.com" {...field} />
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Password</FormLabel>
										<FormControl>
											<Input placeholder="Enter password" {...field} />
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>
							<Button className="w-full" type="submit">
								Submit
							</Button>
						</form>
					</Form>
				</CardContent>
				<CardFooter className="flex justify-center text-sm text-gray-800">
					<p>
						Already have an account?{" "}
						<a href="/sign-up" className="underline text-blue-500">
							sign up
						</a>
					</p>
				</CardFooter>
			</Card>
		</div>
	);
}
