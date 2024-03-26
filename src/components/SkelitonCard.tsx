import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

export default function SkelitonCard() {
  return (
    <Card>
        <Skeleton height={'200px'}/>
        <CardBody>
            <SkeletonText></SkeletonText>
        </CardBody>
    </Card>
  )
}
