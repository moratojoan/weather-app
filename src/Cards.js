import { EuiFlexGrid, EuiFlexItem } from '@elastic/eui';
import Card from './Card';


export default function Cards({municipiosWeatherInfo, onDeleteCard}) {
    return (
        <div>
            <EuiFlexGrid columns={3}>
                {municipiosWeatherInfo.map(({ id, ...props }) =>
                    <EuiFlexItem key={id}>
                        <Card
                            onDelete={() => onDeleteCard(id)}
                            {...props}
                        />
                    </EuiFlexItem>
                )}
            </EuiFlexGrid>
        </div>
    );
}
