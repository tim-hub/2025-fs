'use client'

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, ReceiptText } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useCallback, useEffect, useState } from 'react';
import { Money } from '@/components/custom/money';
import { debounce } from '@/lib/utils';


export default function Home() {

  const [date, setDate] = useState(new Date());


  useEffect(() => {
    // Update the date every second
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);


  const debouncedQuantityChange = useCallback(
    debounce((value: string) => {
      const parsedValue = parseInt(value, 10);
      setQuantity(isNaN(parsedValue) ? 0 : parsedValue);
    }, 100),
    []
  );

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedQuantityChange(e.target.value);
  };

  const debouncedPriceChange = useCallback(
    debounce((value: string) => {
      const parsedValue = parseFloat(value);
      setPrice(isNaN(parsedValue) ? 0 : parsedValue);
    }, 100),
    []
  );


  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedPriceChange(e.target.value);
  }

  return (
    <div
      className="grid min-h-screen items-center justify-items-center gap-16 p-8 pb-20 font-sans grid-rows-[20px_1fr_20px] sm:p-20">
      <main className="row-start-2 grid grid-cols-1 items-center gap-[32px] sm:items-start md:grid-cols-2">
        <div className="flex flex-col gap-4 min-w-80">
          <div className="flex flex-col gap-2">
            <Label htmlFor="quantity">Quantity</Label>
            <Input id={'quantity'} type={'number'} required onChange={handleQuantityChange}/>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="price">Price</Label>
            <Input id={'price'} type={'number'} required onChange={handlePriceChange}/>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Card className="max-h-max w-full rounded-none border-gray-200 shadow-sm min-w-80 min-h-80">
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2">
                  <ReceiptText className="h-5 w-5"/>
                  <CardTitle className="text-lg">Summary</CardTitle>
                </div>
              </div>
              <CardDescription className="mt-1 flex flex-wrap items-center gap-2 text-xs">
                <span className="inline-flex items-center gap-1"><Clock
                  className="h-3.5 w-3.5"/> {date.toLocaleString()}</span>
              </CardDescription>
            </CardHeader>

            <CardContent className="pt-2">
              {
                price > 0 && quantity > 0 && (
                  <>
                    <Separator className="my-3"/>
                    <div className="space-y-2">
                      <div className="grid grid-cols-12 items-center text-sm gap-x-1">
                        <div className="col-span-8 truncate">Item</div>
                        <div className="col-span-2 text-right tabular-nums">× {quantity}</div>
                        <div className="col-span-2 text-right font-medium">
                          <Money value={price * quantity}/>
                        </div>
                      </div>
                    </div>

                    <Separator className="my-3"/>
                    {/* Totals */}
                    <div className="text-sm space-y-1">
                      <div className="flex items-center justify-between"><span
                        className="text-muted-foreground">Subtotal</span><span className="font-medium"><Money
                        value={quantity * price}/></span></div>
                      <div className="flex items-center justify-between"><span
                        className="text-muted-foreground">Tax ({(0.1 * 100).toFixed(0)}%)</span><span
                        className="font-medium"><Money value={0.1}/></span></div>
                      <div className="flex items-center justify-between pt-1 text-base"><span
                        className="font-semibold">Total</span><span className="font-semibold"><Money
                        value={0.1}/></span>
                      </div>
                    </div>

                    {/* Thank you */}
                    <div className="mt-4 text-center text-xs text-muted-foreground not-print:hidden">
                      Thanks for supporting local! Keep this for your records.
                    </div>
                  </>
                )
              }
            </CardContent>
          </Card>
        </div>

      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-[24px]">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/tim-hub/2025-fs/issues"
          target="_blank"
          rel="noopener noreferrer"
        >
          Support
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/tim-hub/2025-fs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code
        </a>
      </footer>
    </div>
  );
}
