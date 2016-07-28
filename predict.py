
import pandas as pd
from datetime import datetime

df = pd.read_csv("sphist.csv")
df["Date"] = pd.to_datetime(df["Date"])
df = df[df["Date"] > datetime(year=2015,month=4,day=1)]
df.sort("Date",inplace = True,ascending=False)
starting_row = df["Date"] == '1951-01-03'
for row in df[starting_row:]:
    print(row)
    break
    
    
    
    