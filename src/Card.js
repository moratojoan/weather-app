import {
    EuiCard,
    EuiStat
  } from '@elastic/eui';

export default function Card({
    name,
    actualTemperature,
    rain
}) {
    return (
        <EuiCard title={name}>
            <EuiStat
                title={`${actualTemperature} ºC`}
                description="Temperatura actual:"
                textAlign="center"
            />
            <EuiStat
                title={`${rain} %`}
                description="Lluvia:"
                titleSize="m"
                textAlign="center"
            />
        </EuiCard>
    );
}
