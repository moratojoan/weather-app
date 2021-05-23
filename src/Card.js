import {
    EuiCard,
    EuiStat,
    EuiFlexGroup,
    EuiFlexItem,
    EuiButtonIcon
  } from '@elastic/eui';

export default function Card({
    name,
    actualTemperature,
    rain,
    onDelete,
}) {
    return (
        <EuiCard
            title={name}
            footer={
                <EuiFlexGroup justifyContent="flexEnd">
                    <EuiFlexItem grow={false}>
                        <EuiButtonIcon
                            display="base"
                            iconType="trash"
                            aria-label="Delete"
                            color="danger"
                            onClick={onDelete}
                        />
                    </EuiFlexItem>
                </EuiFlexGroup>
            }
        >
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
