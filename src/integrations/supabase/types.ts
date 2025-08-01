export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      expenses: {
        Row: {
          amount: number
          category: string
          created_at: string
          date: string
          id: string
          note: string | null
          user_id: string
        }
        Insert: {
          amount: number
          category: string
          created_at?: string
          date?: string
          id?: string
          note?: string | null
          user_id: string
        }
        Update: {
          amount?: number
          category?: string
          created_at?: string
          date?: string
          id?: string
          note?: string | null
          user_id?: string
        }
        Relationships: []
      }
      income: {
        Row: {
          amount: number
          created_at: string
          date: string
          id: string
          note: string | null
          source: string
          user_id: string
        }
        Insert: {
          amount: number
          created_at?: string
          date?: string
          id?: string
          note?: string | null
          source: string
          user_id: string
        }
        Update: {
          amount?: number
          created_at?: string
          date?: string
          id?: string
          note?: string | null
          source?: string
          user_id?: string
        }
        Relationships: []
      }
      investments: {
        Row: {
          amount: number
          category: string | null
          created_at: string | null
          id: string
          name: string
          target_amount: number | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          amount?: number
          category?: string | null
          created_at?: string | null
          id?: string
          name: string
          target_amount?: number | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          amount?: number
          category?: string | null
          created_at?: string | null
          id?: string
          name?: string
          target_amount?: number | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      momo_transactions: {
        Row: {
          amount: number
          callback_received_at: string | null
          created_at: string | null
          currency: string
          external_id: string | null
          financial_transaction_id: string | null
          id: string
          phone: string
          reason: string | null
          reference_id: string
          status: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          amount: number
          callback_received_at?: string | null
          created_at?: string | null
          currency?: string
          external_id?: string | null
          financial_transaction_id?: string | null
          id?: string
          phone: string
          reason?: string | null
          reference_id: string
          status?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          amount?: number
          callback_received_at?: string | null
          created_at?: string | null
          currency?: string
          external_id?: string | null
          financial_transaction_id?: string | null
          id?: string
          phone?: string
          reason?: string | null
          reference_id?: string
          status?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string | null
          email: string | null
          full_name: string | null
          id: string
          phone: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id: string
          phone?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          phone?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      savings: {
        Row: {
          amount: number
          created_at: string | null
          goal_id: string
          id: string
          source: string | null
          status: string | null
          type: string | null
          user_id: string
        }
        Insert: {
          amount: number
          created_at?: string | null
          goal_id: string
          id?: string
          source?: string | null
          status?: string | null
          type?: string | null
          user_id: string
        }
        Update: {
          amount?: number
          created_at?: string | null
          goal_id?: string
          id?: string
          source?: string | null
          status?: string | null
          type?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "savings_goal_id_fkey"
            columns: ["goal_id"]
            isOneToOne: false
            referencedRelation: "savings_goals"
            referencedColumns: ["id"]
          },
        ]
      }
      savings_goals: {
        Row: {
          category: string
          created_at: string | null
          goal_amount: number
          id: string
          name: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          category: string
          created_at?: string | null
          goal_amount: number
          id?: string
          name: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          category?: string
          created_at?: string | null
          goal_amount?: number
          id?: string
          name?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      scheduled_savings: {
        Row: {
          amount: number
          created_at: string
          frequency: string
          goal_id: string | null
          id: string
          is_active: boolean
          name: string
          next_execution_date: string
          updated_at: string
          user_id: string
        }
        Insert: {
          amount: number
          created_at?: string
          frequency: string
          goal_id?: string | null
          id?: string
          is_active?: boolean
          name: string
          next_execution_date: string
          updated_at?: string
          user_id: string
        }
        Update: {
          amount?: number
          created_at?: string
          frequency?: string
          goal_id?: string | null
          id?: string
          is_active?: boolean
          name?: string
          next_execution_date?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      topups: {
        Row: {
          amount: number
          created_at: string
          currency: string | null
          external_id: string
          id: string
          momo_reference_id: string
          momo_transaction_id: string | null
          payee_note: string | null
          payer_message: string | null
          phone_number: string
          status: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          amount: number
          created_at?: string
          currency?: string | null
          external_id: string
          id?: string
          momo_reference_id: string
          momo_transaction_id?: string | null
          payee_note?: string | null
          payer_message?: string | null
          phone_number: string
          status?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          amount?: number
          created_at?: string
          currency?: string | null
          external_id?: string
          id?: string
          momo_reference_id?: string
          momo_transaction_id?: string | null
          payee_note?: string | null
          payer_message?: string | null
          phone_number?: string
          status?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      transactions: {
        Row: {
          amount: number
          created_at: string | null
          goal_id: string | null
          id: string
          method: string | null
          status: string | null
          type: string
          user_id: string
        }
        Insert: {
          amount: number
          created_at?: string | null
          goal_id?: string | null
          id?: string
          method?: string | null
          status?: string | null
          type: string
          user_id: string
        }
        Update: {
          amount?: number
          created_at?: string | null
          goal_id?: string | null
          id?: string
          method?: string | null
          status?: string | null
          type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "transactions_goal_id_fkey"
            columns: ["goal_id"]
            isOneToOne: false
            referencedRelation: "savings_goals"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      withdrawals: {
        Row: {
          amount: number
          created_at: string | null
          currency: string | null
          external_id: string
          goal_id: string | null
          id: string
          momo_reference_id: string
          momo_transaction_id: string | null
          note: string | null
          payee_note: string | null
          payer_message: string | null
          phone_number: string
          status: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          amount: number
          created_at?: string | null
          currency?: string | null
          external_id: string
          goal_id?: string | null
          id?: string
          momo_reference_id: string
          momo_transaction_id?: string | null
          note?: string | null
          payee_note?: string | null
          payer_message?: string | null
          phone_number: string
          status?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          amount?: number
          created_at?: string | null
          currency?: string | null
          external_id?: string
          goal_id?: string | null
          id?: string
          momo_reference_id?: string
          momo_transaction_id?: string | null
          note?: string | null
          payee_note?: string | null
          payer_message?: string | null
          phone_number?: string
          status?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "withdrawals_goal_id_fkey"
            columns: ["goal_id"]
            isOneToOne: false
            referencedRelation: "savings_goals"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _user_id: string
          _role: Database["public"]["Enums"]["app_role"]
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user"],
    },
  },
} as const
