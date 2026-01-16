import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, User, Lock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Auth = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => setIsLoading(false), 2000);
    };

    return (
        <div className="min-h-screen flex items-center justify-center relative bg-secondary/30 overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 gradient-navy opacity-[0.03]" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            {/* Decorative Wave */}
            <div className="absolute bottom-0 left-0 right-0 h-32 wave-pattern opacity-10" />

            <div className="w-full max-w-md px-4 relative z-10 animate-fade-up">
                <Link
                    to="/"
                    className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Kembali ke Beranda
                </Link>

                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-soft mb-4 p-2">
                        <img src="/logo.png" alt="IHDC Logo" className="w-full h-full object-contain" />
                    </div>
                    <h1 className="text-2xl font-bold font-display text-foreground">
                        Selamat Datang di IHDC
                    </h1>
                    <p className="text-muted-foreground mt-2">
                        Portal Data Hidrografi Indonesia
                    </p>
                </div>

                <Tabs defaultValue="login" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                        <TabsTrigger value="login">Masuk</TabsTrigger>
                        <TabsTrigger value="register">Daftar</TabsTrigger>
                    </TabsList>

                    <TabsContent value="login">
                        <Card className="border-border/50 shadow-soft backdrop-blur-sm bg-white/80">
                            <CardHeader>
                                <CardTitle>Masuk Akun</CardTitle>
                                <CardDescription>
                                    Masukan email dan kata sandi Anda untuk mengakses akun.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="email-login">Email</Label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                            <Input id="email-login" type="email" placeholder="nama@instansi.go.id" className="pl-9" required />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <Label htmlFor="password-login">Kata Sandi</Label>
                                            <a href="#" className="text-xs text-primary hover:underline">Lupa kata sandi?</a>
                                        </div>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                            <Input id="password-login" type="password" placeholder="••••••••" className="pl-9" required />
                                        </div>
                                    </div>
                                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isLoading}>
                                        {isLoading ? "Memproses..." : "Masuk"}
                                    </Button>
                                </form>
                            </CardContent>
                            <CardFooter className="flex justify-center border-t py-4">
                                <p className="text-xs text-muted-foreground text-center">
                                    Dilindungi oleh reCAPTCHA dan kebijakan privasi Pushidrosal berlaku.
                                </p>
                            </CardFooter>
                        </Card>
                    </TabsContent>

                    <TabsContent value="register">
                        <Card className="border-border/50 shadow-soft backdrop-blur-sm bg-white/80">
                            <CardHeader>
                                <CardTitle>Buat Akun Baru</CardTitle>
                                <CardDescription>
                                    Lengkapi data diri Anda untuk mendaftar akun baru.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name-register">Nama Lengkap</Label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                            <Input id="name-register" type="text" placeholder="Nama Lengkap" className="pl-9" required />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email-register">Email Instansi</Label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                            <Input id="email-register" type="email" placeholder="nama@instansi.go.id" className="pl-9" required />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="password-register">Kata Sandi</Label>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                            <Input id="password-register" type="password" placeholder="••••••••" className="pl-9" required />
                                        </div>
                                    </div>
                                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white" disabled={isLoading}>
                                        {isLoading ? "Memproses..." : "Daftar Akun"}
                                    </Button>
                                </form>
                            </CardContent>
                            <CardFooter className="flex justify-center border-t py-4">
                                <p className="text-xs text-muted-foreground text-center">
                                    Dengan mendaftar, Anda menyetujui Syarat dan Ketentuan layanan IHDC.
                                </p>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default Auth;
