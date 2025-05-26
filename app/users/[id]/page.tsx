"use client";

import React, { useEffect, useState } from "react";

const UserDetails = ({ params }: { params: Promise<{ id: string }> }) => {
  const [user, setUser] = useState<{ id: number; name: string } | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const resolvedParams = await params;
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${resolvedParams.id}`
      );
      const data = await response.json();
      setUser(data);
    };
    fetchUser();
  }, [params]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>User Details</h1>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
    </div>
  );
};

export default UserDetails;
