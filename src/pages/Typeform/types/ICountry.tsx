interface Flag {
  png: string;
  svg: string;
  alt: string;
}

interface NativeName {
  official: string;
  common: string;
}

interface Name {
  common: string;
  official: string;
  nativeName: {
    [key: string]: NativeName;
  };
}

interface IDD {
  root: string;
  suffixes: string[];
}

export interface Country {
  flags: Flag;
  name: Name;
  idd: IDD;
}
