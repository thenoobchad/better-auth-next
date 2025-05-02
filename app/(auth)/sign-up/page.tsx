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
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signUpSchema } from "@/lib/auth-schema";

export default function SignupPage() {
	// 1. Define your form.
	const form = useForm<z.infer<typeof signUpSchema>>({
		resolver: zodResolver(signUpSchema),
		defaultValues: {
			username: "",
			email: "",
			password: "",
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof signUpSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}

	return (
		<div className="flex w-screen h-screen items-center">
			<Card className="w-full max-w-sm mx-auto">
				<CardHeader>
					<CardTitle>
						<p className="text-2xl">Sign Up</p>
					</CardTitle>
					<CardDescription>Sign up to get started</CardDescription>
				</CardHeader>
				<CardContent>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
							<FormField
								control={form.control}
								name="username"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Username</FormLabel>
										<FormControl>
											<Input placeholder="Enter username" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input placeholder="example@mail.com" {...field} />
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
							<Button type="submit" className="w-full">
								Submit
							</Button>
						</form>
					</Form>
				</CardContent>
				<CardFooter className="flex justify-center text-sm text-gray-800">
					<p>
						Already have an account?{" "}
						<a href="/sign-in" className="underline text-blue-500">
							sign in
						</a>
					</p>
				</CardFooter>
			</Card>
		</div>
	);
}
