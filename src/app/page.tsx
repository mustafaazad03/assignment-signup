import Image from "next/image";

export default function Home() {
	return (
		<>
			<div className="grid grid-cols-2 min-h-full h-[100vh] w-full">
				<Image
					className="h-full object-cover grayscale w-full"
					src="/signup.jpeg"
					width={600}
					height={600}
					alt="signup"
				/>
				<div className="flex flex-col mx-8 mt-24 sm:px-6 lg:flex-none lg:px-10 xl:px-12">
					<div className="w-full">
						<div>
							<Image
								className="h-9 w-auto"
								src="/logo.svg"
								width={200}
								height={200}
								alt="Logo"
							/>
							<div className="flex justify-between items-end mt-32">
								<h2 className="text-4xl font-bold leading-9 tracking-tight text-gray-900">
									Sign Up
								</h2>
								<p className="text-sm font-bold leading-6 text-black items-end">
									Or{" "}
									<a
										href="#"
										className=" text-[#17B582] hover:text-[#17B582]/50"
									>
										Sign In
									</a>
								</p>
							</div>
						</div>

						<div className="mt-10">
							<div>
								<form action="#" method="POST" className="space-y-6">
									<div>
										<div className="mt-2">
											<input
												id="email"
												name="email"
												type="email"
												autoComplete="email"
												placeholder="Email"
												required
												className="block py-3 px-6 w-full rounded-full border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#696969] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
											/>
										</div>
									</div>

									<div>
										<div className="mt-2">
											<input
												id="password"
												name="password"
												type="password"
												autoComplete="current-password"
												placeholder="Password"
												required
												className="block py-3 px-6 w-full rounded-full border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#696969] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
											/>
										</div>
									</div>

									<div>
										<div className="mt-2">
											<input
												id="re-password"
												name="re-password"
												type="re-password"
												autoComplete="current-re-password"
												placeholder="Re-Enter Password"
												required
												className="block py-3 px-6 rounded-full w-full border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#696969] focus:ring-2 focus:ring-inset focus:ring-[#17B582] sm:text-sm sm:leading-6"
											/>
										</div>
									</div>

									<div className="flex items-center justify-between">
										<div className="flex items-center">
											<input
												id="remember-me"
												name="remember-me"
												type="checkbox"
												className="h-4 w-4 rounded border-gray-300 text-[#17B582] focus:ring-[#17B582] checked:bg-[#17B582]"
											/>
											<label
												htmlFor="remember-me"
												className="ml-3 block text-sm leading-6 text-[#696969]"
											>
												Remember me
											</label>
										</div>

										<div className="text-sm leading-6">
											<a
												href="#"
												className=" text-[#696969] hover:text-indigo-500"
											>
												Forgot password?
											</a>
										</div>
									</div>

									<div>
										<button
											type="submit"
											className="flex w-full py-3 px-6 font-bold justify-center rounded-full bg-[#17B582] text-sm leading-6 text-white shadow-sm hover:bg-[#17B582]/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17B582]/90"
										>
											Log in
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
