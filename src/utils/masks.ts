export const maskPhone = (value: string) => {
  if (!value) return '';
  let v = value.replace(/\D/g, '');
  if (v.length > 11) v = v.slice(0, 11);
  if (v.length > 10) {
    return v.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
  } else if (v.length > 6) {
    return v.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
  } else if (v.length > 2) {
    return v.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
  } else if (v.length > 0) {
    return v.replace(/^(\d*)/, '($1');
  }
  return v;
};

export const maskCPF = (value: string) => {
  if (!value) return '';
  let v = value.replace(/\D/g, '');
  if (v.length > 11) v = v.slice(0, 11);
  return v
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
};

export const maskYear = (value: string) => {
  if (!value) return '';
  let v = value.replace(/\D/g, '');
  if (v.length > 4) v = v.slice(0, 4);
  return v;
};

export const maskKM = (value: string) => {
  if (!value) return '';
  let v = value.replace(/\D/g, '');
  return v.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
