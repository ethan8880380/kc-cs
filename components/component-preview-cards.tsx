"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { 
  ChevronRight, 
  ChevronDown, 
  Bell, 
  Check, 
  ChevronsUpDown, 
  Plus, 
  Copy, 
  MoreHorizontal,
  Settings,
  User,
  CreditCard,
  LogOut,
  Mail,
  MessageSquare,
  PlusCircle,
  UserPlus,
  Github,
  Keyboard,
  Cloud,
  LifeBuoy,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Calendar as CalendarIcon,
  Loader2,
  Terminal,
  AlertCircle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Spinner } from "@/components/ui/spinner"
import { Kbd } from "@/components/ui/kbd"

interface ComponentPreviewCardProps {
  name: string
  href: string
  children: React.ReactNode
  className?: string
}

function ComponentPreviewCard({ name, href, children, className }: ComponentPreviewCardProps) {
  return (
    <Link href={href} className="group">
      <div className={cn(
        "relative rounded-xl border bg-card text-card-foreground transition-all hover:shadow-md hover:border-foreground/20",
        className
      )}>
        <div className="flex min-h-[180px] items-center justify-center p-6 pb-2">
          {children}
        </div>
        <div className="flex items-center justify-between border-t px-4 py-3">
          <span className="text-sm font-medium">{name}</span>
          <ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
      </div>
    </Link>
  )
}

export function ComponentPreviewCards() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [progress, setProgress] = React.useState(66)
  const [sliderValue, setSliderValue] = React.useState([50])
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {/* Accordion */}
      <ComponentPreviewCard name="Accordion" href="/docs/components/accordion">
        <Accordion type="single" collapsible className="w-full max-w-[200px]">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-sm">Is it accessible?</AccordionTrigger>
            <AccordionContent className="text-xs">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </ComponentPreviewCard>

      {/* Alert */}
      <ComponentPreviewCard name="Alert" href="/docs/components/alert">
        <Alert className="max-w-[220px]">
          <Terminal className="h-4 w-4" />
          <AlertTitle className="text-sm">Heads up!</AlertTitle>
          <AlertDescription className="text-xs">
            You can add components to your app.
          </AlertDescription>
        </Alert>
      </ComponentPreviewCard>

      {/* Alert Dialog */}
      <ComponentPreviewCard name="Alert Dialog" href="/docs/components/alert-dialog">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">Show Dialog</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Are you sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" size="sm">Cancel</Button>
              <Button size="sm">Continue</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </ComponentPreviewCard>

      {/* Avatar */}
      <ComponentPreviewCard name="Avatar" href="/docs/components/avatar">
        <div className="flex -space-x-4">
          <Avatar className="border-2 border-background">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className="border-2 border-background">
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <Avatar className="border-2 border-background">
            <AvatarFallback>+2</AvatarFallback>
          </Avatar>
        </div>
      </ComponentPreviewCard>

      {/* Badge */}
      <ComponentPreviewCard name="Badge" href="/docs/components/badge">
        <div className="flex flex-wrap gap-2 justify-center">
          <Badge>Badge</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </ComponentPreviewCard>

      {/* Button */}
      <ComponentPreviewCard name="Button" href="/docs/components/button">
        <div className="flex flex-wrap gap-2 justify-center">
          <Button size="sm">Primary</Button>
          <Button variant="secondary" size="sm">Secondary</Button>
          <Button variant="outline" size="sm">Outline</Button>
        </div>
      </ComponentPreviewCard>

      {/* Calendar */}
      <ComponentPreviewCard name="Calendar" href="/docs/components/calendar" className="sm:col-span-2 lg:col-span-1 [&>div:first-child]:min-h-0 [&>div:first-child]:h-[180px]">
        <div className="h-[150px] overflow-hidden flex items-start justify-center -mt-2">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border scale-[0.7] origin-top"
          />
        </div>
      </ComponentPreviewCard>

      {/* Card */}
      <ComponentPreviewCard name="Card" href="/docs/components/card">
        <Card className="w-full max-w-[180px]">
          <CardHeader className="p-3 pb-1">
            <CardTitle className="text-sm">Card Title</CardTitle>
            <CardDescription className="text-xs">Description</CardDescription>
          </CardHeader>
          <CardContent className="p-3 pt-0">
            <p className="text-xs text-muted-foreground">Content here.</p>
          </CardContent>
        </Card>
      </ComponentPreviewCard>

      {/* Checkbox */}
      <ComponentPreviewCard name="Checkbox" href="/docs/components/checkbox">
        <div className="flex flex-col gap-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms1" defaultChecked />
            <Label htmlFor="terms1" className="text-sm">Accept terms</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms2" />
            <Label htmlFor="terms2" className="text-sm">Send emails</Label>
          </div>
        </div>
      </ComponentPreviewCard>

      {/* Collapsible */}
      <ComponentPreviewCard name="Collapsible" href="/docs/components/collapsible">
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full max-w-[200px]">
          <CollapsibleTrigger asChild>
            <Button variant="outline" size="sm" className="w-full justify-between">
              @peduarte
              <ChevronsUpDown className="h-4 w-4" />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-2 space-y-2">
            <div className="rounded-md border px-3 py-2 text-xs">@radix-ui/primitives</div>
          </CollapsibleContent>
        </Collapsible>
      </ComponentPreviewCard>

      {/* Dialog */}
      <ComponentPreviewCard name="Dialog" href="/docs/components/dialog">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">Edit Profile</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">Name</Label>
                <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" size="sm">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </ComponentPreviewCard>

      {/* Dropdown Menu */}
      <ComponentPreviewCard name="Dropdown Menu" href="/docs/components/dropdown-menu">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              Open Menu
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ComponentPreviewCard>

      {/* Hover Card */}
      <ComponentPreviewCard name="Hover Card" href="/docs/components/hover-card">
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link" size="sm">@nextjs</Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/vercel.png" />
                <AvatarFallback>VC</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">@nextjs</h4>
                <p className="text-xs text-muted-foreground">
                  The React Framework – created and maintained by @vercel.
                </p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </ComponentPreviewCard>

      {/* Input */}
      <ComponentPreviewCard name="Input" href="/docs/components/input">
        <div className="w-full max-w-[200px] space-y-2">
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
        </div>
      </ComponentPreviewCard>

      {/* Kbd */}
      <ComponentPreviewCard name="Kbd" href="/docs/components/kbd">
        <div className="flex flex-wrap gap-2 justify-center">
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
          <span className="text-sm text-muted-foreground">or</span>
          <Kbd>Ctrl</Kbd>
          <Kbd>K</Kbd>
        </div>
      </ComponentPreviewCard>

      {/* Label */}
      <ComponentPreviewCard name="Label" href="/docs/components/label">
        <div className="grid w-full max-w-[200px] gap-1.5">
          <Label htmlFor="email-2">Email</Label>
          <Input type="email" id="email-2" placeholder="Email" />
        </div>
      </ComponentPreviewCard>

      {/* Popover */}
      <ComponentPreviewCard name="Popover" href="/docs/components/popover">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm">Open Popover</Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Dimensions</h4>
                <p className="text-sm text-muted-foreground">
                  Set the dimensions for the layer.
                </p>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </ComponentPreviewCard>

      {/* Progress */}
      <ComponentPreviewCard name="Progress" href="/docs/components/progress">
        <div className="w-full max-w-[200px] space-y-2">
          <Progress value={progress} className="w-full" />
          <p className="text-xs text-center text-muted-foreground">{progress}% complete</p>
        </div>
      </ComponentPreviewCard>

      {/* Radio Group */}
      <ComponentPreviewCard name="Radio Group" href="/docs/components/radio-group">
        <RadioGroup defaultValue="comfortable" className="space-y-2">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1" className="text-sm">Default</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2" className="text-sm">Comfortable</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="compact" id="r3" />
            <Label htmlFor="r3" className="text-sm">Compact</Label>
          </div>
        </RadioGroup>
      </ComponentPreviewCard>

      {/* Scroll Area */}
      <ComponentPreviewCard name="Scroll Area" href="/docs/components/scroll-area">
        <ScrollArea className="h-[120px] w-[180px] rounded-md border p-2">
          <div className="space-y-2">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="text-xs">Item {i + 1}</div>
            ))}
          </div>
        </ScrollArea>
      </ComponentPreviewCard>

      {/* Select */}
      <ComponentPreviewCard name="Select" href="/docs/components/select">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="orange">Orange</SelectItem>
          </SelectContent>
        </Select>
      </ComponentPreviewCard>

      {/* Separator */}
      <ComponentPreviewCard name="Separator" href="/docs/components/separator">
        <div className="w-full max-w-[200px]">
          <div className="space-y-1">
            <h4 className="text-sm font-medium">Radix Primitives</h4>
            <p className="text-xs text-muted-foreground">An open-source UI component library.</p>
          </div>
          <Separator className="my-4" />
          <div className="flex h-5 items-center space-x-4 text-xs">
            <div>Blog</div>
            <Separator orientation="vertical" />
            <div>Docs</div>
            <Separator orientation="vertical" />
            <div>Source</div>
          </div>
        </div>
      </ComponentPreviewCard>

      {/* Sheet */}
      <ComponentPreviewCard name="Sheet" href="/docs/components/sheet">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm">Open Sheet</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </ComponentPreviewCard>

      {/* Skeleton */}
      <ComponentPreviewCard name="Skeleton" href="/docs/components/skeleton">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[120px]" />
            <Skeleton className="h-4 w-[80px]" />
          </div>
        </div>
      </ComponentPreviewCard>

      {/* Slider */}
      <ComponentPreviewCard name="Slider" href="/docs/components/slider">
        <div className="w-full max-w-[200px] space-y-4">
          <Slider value={sliderValue} onValueChange={setSliderValue} max={100} step={1} />
          <p className="text-xs text-center text-muted-foreground">Value: {sliderValue}</p>
        </div>
      </ComponentPreviewCard>

      {/* Spinner */}
      <ComponentPreviewCard name="Spinner" href="/docs/components/spinner">
        <div className="flex gap-4 items-center">
          <Spinner className="h-6 w-6" />
          <Button disabled size="sm">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Loading
          </Button>
        </div>
      </ComponentPreviewCard>

      {/* Switch */}
      <ComponentPreviewCard name="Switch" href="/docs/components/switch">
        <div className="flex flex-col gap-4">
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode" className="text-sm">Airplane Mode</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="notifications" defaultChecked />
            <Label htmlFor="notifications" className="text-sm">Notifications</Label>
          </div>
        </div>
      </ComponentPreviewCard>

      {/* Table */}
      <ComponentPreviewCard name="Table" href="/docs/components/table" className="sm:col-span-2 lg:col-span-1">
        <Table className="text-xs">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell className="text-right">$250</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>INV002</TableCell>
              <TableCell>Pending</TableCell>
              <TableCell className="text-right">$150</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </ComponentPreviewCard>

      {/* Tabs */}
      <ComponentPreviewCard name="Tabs" href="/docs/components/tabs">
        <Tabs defaultValue="account" className="w-full max-w-[200px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account" className="text-xs">Account</TabsTrigger>
            <TabsTrigger value="password" className="text-xs">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="mt-2">
            <p className="text-xs text-muted-foreground">Make changes to your account.</p>
          </TabsContent>
          <TabsContent value="password" className="mt-2">
            <p className="text-xs text-muted-foreground">Change your password here.</p>
          </TabsContent>
        </Tabs>
      </ComponentPreviewCard>

      {/* Textarea */}
      <ComponentPreviewCard name="Textarea" href="/docs/components/textarea">
        <Textarea placeholder="Type your message here." className="max-w-[200px] min-h-[80px]" />
      </ComponentPreviewCard>

      {/* Toggle */}
      <ComponentPreviewCard name="Toggle" href="/docs/components/toggle">
        <div className="flex gap-2">
          <Toggle aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
          </Toggle>
          <Toggle aria-label="Toggle underline" defaultPressed>
            <Underline className="h-4 w-4" />
          </Toggle>
        </div>
      </ComponentPreviewCard>

      {/* Toggle Group */}
      <ComponentPreviewCard name="Toggle Group" href="/docs/components/toggle-group">
        <ToggleGroup type="single" defaultValue="center">
          <ToggleGroupItem value="left" aria-label="Align left">
            <AlignLeft className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Align center">
            <AlignCenter className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Align right">
            <AlignRight className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </ComponentPreviewCard>

      {/* Tooltip */}
      <ComponentPreviewCard name="Tooltip" href="/docs/components/tooltip">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm">Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </ComponentPreviewCard>
    </div>
  )
}

