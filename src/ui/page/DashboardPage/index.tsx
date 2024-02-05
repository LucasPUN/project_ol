import useDemoConfig from "./useDemoConfig";
import React from "react";
import { AxisOptions, Chart } from "react-charts";
import {Container} from "@mui/joy";

export default function DashboardPage() {
    const { data} = useDemoConfig({
        series: 3,
        dataType: "ordinal",
    });

    const primaryAxis = React.useMemo<
        AxisOptions<typeof data[number]["data"][number]>
    >(
        () => ({
            position: "left",
            getValue: (datum) => datum.primary,
        }),
        []
    );

    const secondaryAxes = React.useMemo<
        AxisOptions<typeof data[number]["data"][number]>[]
    >(
        () => [
            {
                position: "bottom",
                getValue: (datum) => datum.secondary,
                stacked: true,
            },
        ],
        []
    );

    return (
        <>
            <br />
                <Container
                style={{
                    width: "80vw",
                    height: "80vw"
                }}>
                <Chart
                    options={{
                        data,
                        primaryAxis,
                        secondaryAxes,
                    }}
                />
                </Container>

        </>
    );
}
