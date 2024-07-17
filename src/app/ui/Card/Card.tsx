import { Item } from '@/app/lib/definitions';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Divider } from '@nextui-org/react';

const PageCard = ({ name, description }: Item) => {
  return (
    <Card>
      <CardHeader>
        <p className='text-lg font-bold'>{name}</p>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{description}</p>
      </CardBody>
    </Card>
  );
};

export default PageCard;
