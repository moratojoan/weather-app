import { EuiFlexGrid, EuiFlexItem } from '@elastic/eui';
import Card from './Card';


export default function Cards({municipiosWeatherInfo}) {
    return (
        <div>
            <EuiFlexGrid columns={3}>
                {municipiosWeatherInfo.map(({ id, ...props }) =>
                    <EuiFlexItem key={id}>
                        <Card {...props} />
                    </EuiFlexItem>
                )}
            </EuiFlexGrid>
        </div>
    );
}
