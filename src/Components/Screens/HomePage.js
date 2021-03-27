import React, { useState } from "react";
import Navbar from "./Navbar";
import { Card, Button } from "react-bootstrap";
import { useAuth } from "../../database/AuthContext";

export default function HomePage() {
  const { currentUser } = useAuth();

  return (
    <div>
      <Navbar />
    </div>
  );
}
