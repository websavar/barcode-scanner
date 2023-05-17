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

export interface InputProps {
  name: string
  inputValue: any
  register?: UseFormRegister<FormValues> | any
  required?: boolean
  inputType?: string
}

export interface FormValues {
  id: string
  amount_multiplier: number | null
  brand: string
  categ_id: number | null
  category_id: number | null
  code: number | null
  description: string | null
  edeka_article_number: boolean
  gross_weight: number | null
  net_weight: number | null
  notes: boolean
  packaging: string
  related_products: []
  requires_best_before_date: boolean
  best_before_date?: Date | string | null
  requires_meat_info: boolean
  trade_item_unit_descriptor: string
  trade_item_unit_descriptor_name: string
  type: string
  unit_name: string
  validation_status: 'validated' | 'unvalidated' | string
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
  register?: UseFormRegister<FormValues> | any
  inputName?: string
  required?: boolean
}