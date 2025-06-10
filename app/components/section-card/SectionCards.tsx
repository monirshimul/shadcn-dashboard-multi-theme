

import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { TrendingDown, TrendingUp } from "lucide-react"

export function SectionCards() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <Card className="@container/card shadow-md shadow-primary/40">
                <CardHeader>
                    <CardDescription>Total Revenue</CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl dark:text-primary">
                        $1,250.00
                    </CardTitle>
                    <CardAction>
                        <Badge variant="outline">
                            <TrendingUp className="dark:text-primary" />
                            +12.5%
                        </Badge>
                    </CardAction>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className="line-clamp-1 flex gap-2 font-medium">
                        Trending up this month <TrendingUp className="size-4 dark:text-primary" />
                    </div>
                    <div className="text-muted-foreground">
                        Visitors for the last 6 months
                    </div>
                </CardFooter>
            </Card>
            <Card className="@container/card shadow-md shadow-primary/40">
                <CardHeader>
                    <CardDescription>New Customers</CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl dark:text-primary">
                        1,234
                    </CardTitle>
                    <CardAction>
                        <Badge variant="outline">
                            <TrendingDown className="dark:text-primary" />
                            -20%
                        </Badge>
                    </CardAction>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className="line-clamp-1 flex gap-2 font-medium">
                        Down 20% this period <TrendingDown className="size-4 dark:text-primary" />
                    </div>
                    <div className="text-muted-foreground">
                        Acquisition needs attention
                    </div>
                </CardFooter>
            </Card>
            <Card className="@container/card shadow-md shadow-primary/40">
                <CardHeader>
                    <CardDescription>Active Accounts</CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl dark:text-primary">
                        45,678
                    </CardTitle>
                    <CardAction>
                        <Badge variant="outline">
                            <TrendingUp className="dark:text-primary" />
                            +12.5%
                        </Badge>
                    </CardAction>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className="line-clamp-1 flex gap-2 font-medium">
                        Strong user retention <TrendingUp className="size-4 dark:text-primary" />
                    </div>
                    <div className="text-muted-foreground">Engagement exceed targets</div>
                </CardFooter>
            </Card>
            <Card className="@container/card shadow-md shadow-primary/40">
                <CardHeader>
                    <CardDescription>Growth Rate</CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl dark:text-primary">
                        4.5%
                    </CardTitle>
                    <CardAction>
                        <Badge variant="outline">
                            <TrendingUp className="dark:text-primary" />
                            +4.5%
                        </Badge>
                    </CardAction>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className="line-clamp-1 flex gap-2 font-medium">
                        Steady performance increase <TrendingUp className="size-4 dark:text-primary" />
                    </div>
                    <div className="text-muted-foreground">Meets growth projections</div>
                </CardFooter>
            </Card>
        </div>
    )
}
