"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function FuOpClient() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-black text-3xl font-bold mb-8">凱基期貨選擇權教學</h1>
      

        <Link href="/" className="mt-10 inline-block text-green-600 font-bold">
           ← 回到首頁
        </Link>
      </div>
    </div>
  );
}