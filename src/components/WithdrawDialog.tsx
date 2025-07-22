
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useWithdrawals } from "@/hooks/useWithdrawals";
import { useToast } from "@/hooks/use-toast";
import { Minus } from "lucide-react";

interface WithdrawDialogProps {
  children?: React.ReactNode;
}

export const WithdrawDialog = ({ children }: WithdrawDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [note, setNote] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { createWithdrawal } = useWithdrawals();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!amount || parseFloat(amount) <= 0) {
      toast({
        variant: "destructive",
        description: "Please enter a valid amount"
      });
      return;
    }

    if (!phoneNumber) {
      toast({
        variant: "destructive",
        description: "Please enter your phone number"
      });
      return;
    }

    setIsLoading(true);
    
    try {
      console.log('=== SUBMITTING WITHDRAWAL ===')
      console.log('Amount:', amount, 'Phone:', phoneNumber)
      console.log('Note (before cleaning):', note)
      
      // Clean the payload - no goal_id needed for general withdrawals
      const cleanedPayload = {
        amount: parseFloat(amount),
        phone_number: phoneNumber,
        note: note?.trim() || null
      };

      console.log('Cleaned withdrawal payload:', cleanedPayload)

      const result = await createWithdrawal(cleanedPayload);

      console.log('Withdrawal result:', result)

      // Check if the result indicates success
      if (result && result.success) {
        toast({
          description: `Withdrawal request submitted successfully! Reference: ${result.referenceId || 'N/A'}`
        });

        setIsOpen(false);
        setAmount("");
        setPhoneNumber("");
        setNote("");
      } else {
        // Handle failure case
        const errorMessage = result?.error || result?.details || "Failed to submit withdrawal request";
        console.error('Withdrawal failed:', errorMessage);
        
        toast({
          variant: "destructive",
          description: `Withdrawal failed: ${errorMessage}`
        });
      }
    } catch (error: any) {
      console.error('Error creating withdrawal:', error);
      
      // Parse the error message more carefully
      let errorMessage = "Failed to submit withdrawal request";
      
      if (error.message) {
        if (error.message.includes('transfer_failed')) {
          errorMessage = "MTN MoMo transfer failed. Please check your phone number and try again.";
        } else if (error.message.includes('credentials')) {
          errorMessage = "Payment service configuration issue. Please contact support.";
        } else {
          errorMessage = error.message;
        }
      }
      
      toast({
        variant: "destructive",
        description: errorMessage
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children || (
          <Button variant="outline" className="w-full">
            <Minus className="w-4 h-4 mr-2" />
            Withdraw Money
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Withdraw Money</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="amount">Amount (RWF)</Label>
            <Input
              id="amount"
              type="number"
              placeholder="Enter amount to withdraw"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              min="1"
              step="1"
              required
            />
            <p className="text-xs text-muted-foreground">
              Note: Amount will be converted to EUR for sandbox testing
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="250788000000"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="note">Note (Optional)</Label>
            <Textarea
              id="note"
              placeholder="Reason for withdrawal..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={3}
            />
          </div>

          <div className="flex gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
              className="flex-1"
            >
              {isLoading ? "Processing..." : "Submit Withdrawal"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
