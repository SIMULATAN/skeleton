import { useState } from 'react';
import { TagsInput } from '@skeletonlabs/skeleton-react';
import { XCircle as IconDelete } from 'lucide-react';

export const Page: React.FC = () => {
	const [flavors, setFlavors] = useState(['Vanilla', 'Chocolate', 'Stawberry']);

	return <TagsInput value={flavors} onValueChange={setFlavors} placeholder="Add Tag..." buttonDelete={<IconDelete className="size-4" />} />;
};