"use client"

import {
  Toaster as ChakraToaster,
  Portal,
  Spinner,
  Stack,
  Toast,
  createToaster,
} from "@chakra-ui/react"
import { LuX } from "react-icons/lu"


type StatusType = keyof typeof statusStyles;

export const toaster = createToaster({
  placement: "bottom-end",
  pauseOnPageIdle: true,
  gap: 16,
})

const statusStyles = {
  success: { borderColor: "green.800" },
  error: { borderColor: "red.800" },
  warning: { borderColor: "yellow.800" },
  info: { borderColor: "blue.800" },
  loading: { borderColor: "gray.300" },
}

export const Toaster = () => {
  return (
    <Portal>
      <ChakraToaster toaster={toaster} insetInline={{ mdDown: "4" }}>
        {(toast) => {
          const type = (toast.type ?? "info") as StatusType
          const styles = statusStyles[type]
          
          return (
            <Toast.Root
              width={{ base: "auto", sm: "sm" }} 
              bg="gray.800"
              
              p={4}
              borderLeftWidth="1px"
              borderBottomWidth="1px"
              borderColor={styles?.borderColor}
            >
              {toast.type === "loading" ? (
                <Spinner size="sm" />
              ) : null}

              <Stack gap="1" flex="1" maxWidth="100%">
                {toast.title && (
                  <Toast.Title textStyle="h3">{toast.title}</Toast.Title>
                )}
                {toast.description && (
                  <Toast.Description textStyle="body">
                    {toast.description}
                  </Toast.Description>
                )}
              </Stack>
              {toast.action && (
                <Toast.ActionTrigger>{toast.action.label}</Toast.ActionTrigger>
              )}
              {toast.closable && (
                <Toast.CloseTrigger>
                  <LuX size="16px" />
                </Toast.CloseTrigger>
              )}
            </Toast.Root>
          )
        }}
      </ChakraToaster>
    </Portal>
  )
}