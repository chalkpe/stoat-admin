"use client";

import { useAuthorisedUser } from "@/lib/auth/user";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

import { Button, Flex, TextField } from "@radix-ui/themes";
import { useState } from "react";

export function LoginButton() {
  const [value, setValue] = useState("");

  if (process.env.NEXT_PUBLIC_AUTH_TYPE === "none") {
    return (
      <Button color="ruby" asChild>
        <Link href="/panel">Continue as Instance Owner</Link>
      </Button>
    );
  }

  // eslint-disable-next-line
  const user = useAuthorisedUser(true);
  if (user) {
    return (
      <Flex gap="4" justify="center">
        <Button asChild>
          <Link href="/panel">Dashboard</Link>
        </Button>
        <Button color="ruby" onClick={() => signOut()}>
          Log Out
        </Button>
      </Flex>
    );
  }

  return (
    <Flex gap="4" justify="center">
      <TextField.Root
        value={value}
        className="grow"
        onChange={(e) => setValue(e.currentTarget.value)}
      />
      <Button
        onClick={() =>
          signIn("credentials", {
            redirect: false,
            password: value,
          })
        }
      >
        Login
      </Button>
    </Flex>
  );
}
