import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


export const ToolTipWrapper = ({ component, message }) => {
    return (
       <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    {component}
                </TooltipTrigger>
                <TooltipContent>
                <p>{message}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>

    )
}