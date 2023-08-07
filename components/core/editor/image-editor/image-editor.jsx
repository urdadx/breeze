import { Button } from '@/components/ui/button';
import { ImageIcon, Trash2Icon } from 'lucide-react';
import { Joystick } from 'react-joystick-component';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { PositionTracker } from './position-tracker';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
export const ImageEditor = () => {

  const headerOptions = ["None", "Light", "Dark"]
	
  const [[manualTiltAngleX, manualTiltAngleY], setManualTiltAngle] = useState([0, 0]);
  const onMove = (stick) => {
    setManualTiltAngle([stick.y * 100, stick.x * 100]);
  };
  const [header, setHeader] = useState(headerOptions[0]);
  const onStop = () => {
    setManualTiltAngle([0, 0]);
  };

  const handleSelectHeader = (value) => {
      setHeader(value);
      console.log(value)
  };

  return (
    <>
      <div className="p-4 overflow-y-auto max-h-full min-h-[500px] overscroll-none ">
        <h3 className="mb-1 text-xl font-semibold">Image</h3>
        <div className="flex justify-start place-items-center my-6">
          <Button variant="outline" className="flex gap-2 items-center w-[370px] h-12">
            <ImageIcon size={18} />
            <span className="text-md font-semibold">Replace Image</span>
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-6 my-6">
          <div className="flex gap-3 items-center">
            <span>X:</span>
            <Input value="200" type="number" />
          </div>
          <div className="flex gap-3 items-center">
            <span>Y:</span>
            <Input value="400" type="number" />
          </div>
          <div className="flex gap-3 items-center">
            <span>W:</span>
            <Input value="350" type="number" />
          </div>
          <div className="flex gap-3 items-center">
            <span>H:</span>
            <Input value="150" type="number" />
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <span className="text-md font-medium text-muted-foreground">Tilt:</span>
            <div>
              <Joystick baseColor="gray" stickColor="black" move={onMove} stop={onStop} size={40} />
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <span className="text-md font-medium text-muted-foreground">Position:</span>
            <PositionTracker />
          </div>
        </div>
        <div className="flex justify-between items-center my-6">
          <span className="text-md font-medium text-muted-foreground">Size</span>
          <Slider className="w-[200px]" defaultValue={[90]} max={100} step={1} />
        </div>
        <div className="flex justify-between items-center my-6">
          <span className="text-md font-medium text-muted-foreground">Border Radius</span>
          <Slider className="w-[200px]" defaultValue={[40]} max={100} step={1} />
        </div>
        <div className="flex justify-between items-center my-6">
          <span className="text-md font-medium text-muted-foreground">Shadow</span>
          <Slider className="w-[200px]" defaultValue={[10]} max={100} step={1} />
        </div>
        <div className="flex justify-between items-center my-4">
          <span className="text-md font-medium text-muted-foreground">Browser Header</span>
          <Select onValueChange={handleSelectHeader} defaultValue={header}>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder={header} />
            </SelectTrigger>
            <SelectContent   >
              {
                headerOptions?.map((opt, i) => {
                    return (
                      <SelectItem key={i} value={opt}>{opt}</SelectItem>
                    )
                })
              }
             
            </SelectContent>
          </Select>
        </div>

        <div className="flex justify-start place-items-center mt-6 mb-16">
          <Button className="flex bg-red-400 gap-2 items-center w-[370px] h-12 hover:bg-red-500">
            <Trash2Icon size={18} />
            <span className="text-md font-semibold">Delete</span>
          </Button>
        </div>
      </div>
    </>
  );
};
