import { createContext, useState } from 'react';
import { Alert, AlertTitle, Snackbar } from '@mui/material';

type typeOptions = 'success' | 'info' | 'warning' | 'error';

interface AlertIF {
  ms: number,
  type: typeOptions,
  title?: string,
  description?: string,
};

export const AlertsContext = createContext<AlertIF | any>(null);

export function AlertsProvider(props: any) {
  const [alertItem, setAlertItem] = useState<any>();
  const [open, setOpen] = useState(false);

  const alertMsg = (type: typeOptions, title = '', description = '', errorObject: any, ms = 6000) => {
    console.log({
      type,
      title,
      description,
      errorObject,
    });

    setAlertItem({
      ms,
      type,
      title,
      description,
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AlertsContext.Provider value={{ alertMsg }}>
      {props.children}
      {
        alertItem && (alertItem.title || alertItem.description) ? <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          autoHideDuration={alertItem.ms}
          open={open}
          onClose={() => setOpen(false)}
        >
          <Alert
            severity={alertItem.type}
            onClose={() => handleClose()}
          >
            {alertItem.title ? <AlertTitle>{alertItem.title}</AlertTitle> : ''}
            {alertItem.description ? <span>{alertItem.description}</span> : ''}
          </Alert>
        </Snackbar> : ''
      }
    </AlertsContext.Provider>
  )
}
