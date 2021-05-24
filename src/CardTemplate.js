
import {
    EuiCard,
    EuiStat,
    EuiFlexGroup,
    EuiFlexItem,
    EuiButtonIcon,
    EuiLoadingSpinner
} from '@elastic/eui';


export default function CardTemplate({ title, isLoading, weather, onDelete }) {
    if(!weather && !isLoading) return null;
    return (
        <EuiCard
            title={title}
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
            {isLoading ? (
                <EuiLoadingSpinner size="xl" />
            ) : (
                <>
                    <EuiStat
                        title={weather.actualTemperature}
                        description="Temperatura actual:"
                        textAlign="center"
                    />
                    <EuiStat
                        title={weather.rain}
                        description="Lluvia:"
                        titleSize="m"
                        textAlign="center"
                    />
                </>
            )}
        </EuiCard>
    )
}