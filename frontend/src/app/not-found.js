"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();

    useEffect(() => {
        router.push("/");
    }, []);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>404 - Página Não Encontrada</h1>
            <p>Você será redirecionado para a página inicial...</p>
        </div>
    );
}
