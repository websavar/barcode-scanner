import { UseFormRegister } from "react-hook-form";

export interface ButtonProps {
  id?: string
  classes?: string
  outlined?: boolean
  type?: 'submit' | 'reset' | 'button' | undefined
  onClick?: () => void
  disabled?: boolean
  children: string | JSX.Element
}

export interface FormValues {
  id: string
  amount_multiplier: number | undefined
  brand: string
  categ_id: number | undefined
  category_id: number | undefined
  code: number | undefined
  description: string
  edeka_article_number: string
  gross_weight: number | undefined
  net_weight: number | undefined
  notes: boolean | undefined
  packaging: string
  related_products: []
  requires_best_before_date: boolean | undefined
  best_before_date: Date | string
  requires_meat_info: boolean | undefined
  trade_item_unit_descriptor: string
  trade_item_unit_descriptor_name: string
  type: string
  unit_name: string
  validation_status: 'validated' | 'unvalidated' | undefined
};

export type ContextType = {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
};

export interface InputProps {
  classes?: string
  type?: string
  placeholder?: string
  id?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  register?: UseFormRegister<FormValues>
  inputName?: string
  required?: boolean
}