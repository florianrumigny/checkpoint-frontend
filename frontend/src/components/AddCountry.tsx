import { ADD_COUNTRY } from "@/graphql/mutations"
import { GET_ALL_CONTINENTS } from "@/graphql/queries"
import { useToast } from "@/hooks/use-toast"
import { useMutation, useQuery } from "@apollo/client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Button } from "./ui/button"
import { Continent } from "@/types"

const formSchema = z.object({
    name: z.string().min(2),
    code: z.string().min(2).max(3),
    emoji: z.string().min(1).max(4),
    continent: z.string().min(1),
})

type FormValues = z.infer<typeof formSchema>


function AddCountry() {
    const { toast } = useToast()

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            code: "",
            emoji: "",
            continent: "",
        },
    })

    const [addCountry, { loading: loadingMutation }] = useMutation(ADD_COUNTRY)


    const { data: continentsData, loading: loadingContinents } = useQuery(GET_ALL_CONTINENTS)

    const onSubmit = async (values: FormValues) => {
        try {
            await addCountry({
                variables: {
                    data: {
                        name: values.name,
                        code: values.code,
                        emoji: values.emoji,
                        continent: { id: parseInt(values.continent) },
                    }
                }
            })
            form.reset()
            toast({
                title: "Success",
                description: "Country added successfully.",
                variant: "default",
            })
        } catch (error) {
            console.error("Error adding country:", error)
            toast({
                title: "Error",
                description: "An error occurred while adding the country.",
                variant: "destructive",
            })
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-md mx-auto py-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Country name</FormLabel>
                            <FormControl>
                                <Input placeholder="France" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="code"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Country code</FormLabel>
                            <FormControl>
                                <Input placeholder="FR" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="emoji"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Emoji</FormLabel>
                            <FormControl>
                                <Input placeholder="🇫🇷" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="continent"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Continent</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a continent" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {!loadingContinents &&
                                        continentsData?.continents?.map((c: Continent) => (
                                            <SelectItem key={c.id} value={String(c.id)}>
                                                {c.name}
                                            </SelectItem>
                                        ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" disabled={loadingMutation}>
                    {loadingMutation ? "Submitting..." : "Add Country"}
                </Button>
            </form>
        </Form>
    )
}

export default AddCountry