"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Textarea } from "@/components/ui/textarea";

const FormSchema = z.object({
    name: z.string().min(1, "Nama wajib diisi."),
    email: z.string().email("Format email tidak valid."),
    title: z.string().min(3, {
        message: "Title must be at least 3 characters.",
    }),
    message: z.string().min(10, {
        message: "Message must be at least 10 characters.",
    }),
});

export default function Complaint() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: "",
            email: "",
            title: "",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof FormSchema>) {
        console.log("Form submitted:", values);
        // TODO: kirim data ke API atau server
    }

    return (
        <div className="bg-white h-fit flex flex-col items-center justify-center">
            <h1 className="bg-[url('/header-bg.webp')] bg-cover bg-repeat-round w-full h-[416px] pt-36 text-center font-poppins font-bold text-[70px] text-white">
                PENGADUAN
            </h1>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-1/2 space-y-6 my-28 text-slate-700"
                >
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-xl">Nama</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="nama"
                                        {...field}
                                        className="focus-visible:ring-slate-200"
                                    />
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
                                <FormLabel className="text-xl">Email</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="email"
                                        className="focus-visible:ring-slate-200"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-xl">
                                    Perihal
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Judul Pengaduan"
                                        className="focus-visible:ring-slate-200"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-xl">Pesan</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Isi pesan pengaduan"
                                        className="focus-visible:ring-slate-200"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button
                        type="submit"
                        className="text-lg px-5 pb-2.5 bg-slate-700"
                    >
                        Kirim Pengaduan
                    </Button>
                </form>
            </Form>
        </div>
    );
}
