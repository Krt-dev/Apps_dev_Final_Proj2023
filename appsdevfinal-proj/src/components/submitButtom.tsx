"use client"
import { Component, ComponentProps } from "react";

type SubmitButtonProps = { 
    children: React.ReactNode,
    className?: string, // Use lowercase 'string' instead of 'String'
} & ComponentProps<"button">

export default function SubmitButton({ children, className }: SubmitButtonProps) {

    return (
        <button className={`btn btn-accent btn-block ${className}`}
            type="submit">
            {children}
        </button>
    );
}
