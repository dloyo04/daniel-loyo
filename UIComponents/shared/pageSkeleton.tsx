import {  HStack, Skeleton,  VStack } from "@chakra-ui/react";
import { MainContainer } from "./MainContainer";

export const PageSkeleton = () => {
  return (
    <MainContainer>
      <VStack gap={"16"} align="stretch">
        <Skeleton boxSize="96px" borderRadius="full" />
        <HStack align="center" gap={8}>
          <VStack align="flex-start" flex={1}>
            <Skeleton height="36px" width="60%" />
            <Skeleton height="24px" width="80%" />
          </VStack>
        </HStack>

        
        <VStack align="stretch" gap={4}>
          <Skeleton height="30px" width="40%" />
          <Skeleton height="21px" width="100%" />
          <Skeleton height="21px" width="90%" />
        </VStack>

        <VStack align="stretch" gap={8}>
          <Skeleton height="30px" width="50%" />
          <HStack align="flex-start" gap={8}>
            <Skeleton height="21px" width="120px" />
            <VStack align="stretch" flex={1} gap={2}>
              <Skeleton height="24px" width="70%" />
              <Skeleton height="21px" width="100%" />
              <Skeleton height="21px" width="50%" />
            </VStack>
          </HStack>
        </VStack>
      </VStack>
    </MainContainer>
  );
};