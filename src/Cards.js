import { EuiFlexGrid, EuiFlexItem } from '@elastic/eui';
import Card from './Card';


export default function Cards({ municipiosSelected, onDeleteCard }) {
    return (
        <div>
            <EuiFlexGrid columns={3}>
                {municipiosSelected.map(municipio =>
                    <EuiFlexItem key={municipio.id}>
                        <Card
                            onDelete={() => onDeleteCard(municipio.id)}
                            {...municipio}
                        />
                    </EuiFlexItem>
                )}
            </EuiFlexGrid>
        </div>
    );
}
