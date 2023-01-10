export interface IModalSuccess {
  title?: string;
  text?: string;
  type?: string;
  setShowSuccessModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IModalDelete {
  setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  productId: string;
}
