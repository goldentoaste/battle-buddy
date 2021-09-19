import sys
from typing import Dict, ItemsView, List, Tuple
import openpyxl

import re
import socket
import socketserver
import time

"""
owo
"""

NAME = "TFTMETA.xlsx"

traitMinLevels: Dict[str, int] = {
    "ABOM": 3,
    "DAWN": 2,
    "DRAC": 3,
    "FORG": 2,
    "HELL": 2,
    "IRON": 2,
    "NITE": 2,
    "REDM": 3,
    "RVNT": 2,
    "SENT": 3,
    "ASSA": 2,
    "BRWL": 2,
    "CANN": 2,
    "CAVA": 2,
    "INVO": 2,
    "KNT": 2,
    "LEGI": 2,
    "MYST": 2,
    "RNGR": 2,
    "RNEW": 2,
    "SKRM": 3,
    "SPLW": 2,
}

traitNames = {
    "ABOM": "Abomination",
    "DAWN": "Dawn_Bringer",
    "DRAC": "Draconic",
    "FORG": "Frogetten",
    "HELL": "Hellions",
    "IRON": "Iron_Clad",
    "NITE": "Night_Bringer",
    "REDM": "Redeemed",
    "RVNT": "Revenant",
    "SENT": "Sentinel",
    "ASSA": "Assasin",
    "BRWL": "Brawler",
    "CANN": "Cannoneers",
    "CAVA": "Cavalier",
    "INVO": "Invoker",
    "KNT": "Knight",
    "LEGI": "Legionnaire",
    "MYST": "Mystic",
    "RNGR": "Ranger",
    "RNEW": "Renewers",
    "SKRM": "Skirmishers",
    "SPLW": "Spell Weavers",
}

champions: Dict[str, Tuple[str]] = {
    "Abomination": ("ABOM",),
    "Aatrox": ("REDM", "LEGI"),
    "Akshan": ("SENT", "RNGR"),
    "Aphelios": ("NITE", "RNGR"),
    "Ashe": ("DRAC", "RNGR"),
    "Brand": ("ABOM", "SPLW"),
    "Diana": ("NITE", "ASSA"),
    "Draven": ("FORG", "LEGI"),
    "Fiddle": ("MYST", "ABOM", "RVNT"),
    "Fiddlesticks": ("MYST", "ABOM", "RVNT"),
    "Galio": ("DRAC", "SENT", "KNT"),
    "Garen": ("DAWN", "KNT"),
    "Gragas": ("DAWN", "BRWL"),
    "Gwen": ("MYST",),
    "Hecarim": ("FORG", "CAVA"),
    "Heimer": ("RNEW", "DRAC"),
    "Heimerdinger": ("RNEW", "DRAC"),
    "Irelia": ("LEGI", "SENT", "SKRM"),
    "Ivern": ("RVNT", "RNEW", "INVO"),
    "Jax": ("IRON", "SKRM"),
    "Kalista": ("ABOM", "LEGI"),
    "Karma": ("DAWN", "INVO"),
    "Kayle": ("REDM", "LEGI"),
    "Kennen": ("HELL", "SKRM"),
    "Kha'Zix": ("DAWN", "ASSA"),
    "Kled": ("HELL", "CAVA"),
    "LeeSin": ("NITE", "SKRM"),
    "Leona": ("REDM", "KNT"),
    "Lucian": ("SENT", "CANN"),
    "Lulu": ("HELL", "MYST"),
    "Lux": ("REDM", "MYST"),
    "MissFortune": ("FORG", "CANN"),
    "Nautilus": ("IRON", "KNT"),
    "Naut": ("IRON", "KNT"),
    "Nidalee": ("DAWN", "SKRM"),
    "Nocturne": ("RVNT", "ASSA"),
    "Nunu": ("ABOM", "BRWL"),
    "Olaf": ("SENT", "SKRM"),
    "Poppy": ("HELL", "KNT"),
    "Pyke": ("SENT", "ASSA"),
    "Rakan": ("SENT", "RNEW"),
    "Rell": ("IRON", "CAVA"),
    "Riven": ("DAWN", "LEGI"),
    "Sejuani": ("NITE", "CAVA", "BRWL"),
    "Senna": ("SENT", "CANN"),
    "Sett": ("BRWL", "DRAC"),
    "Soraka": ("DAWN", "RNEW"),
    "Syndra": ("INVO", "REDM"),
    "Teemo": ("INVO", "HELL"),
    "Thresh": ("FORG", "KNT"),
    "Tristana": ("HELL", "CANN"),
    "Udyr": ("DRAC", "SKRM"),
    "Varus": ("REDM", "RNGR"),
    "Vayne": ("FORG", "RNGR"),
    "Vel'Koz": ("REDM", "SPLW"),
    "Viego": ("FORG", "ASSA", "SKRM"),
    "Vladimir": ("NITE", "RNEW"),
    "Voli": ("RVNT", "BRWL"),
    "Volibear": ("RVNT", "BRWL"),
    "Yasuo": ("NITE", "LEGI"),
    "Ziggs": ("HELL", "SPLW"),
    "Zyra": ("DRAC", "SPLW"),
}
star = "★"
champLineSep = "|"
champItemSep = ":"


def format(string: str):
    return (
        string.strip()
        .replace("/ ", "/")
        .replace(" /", "/")
        .replace("+", "")
        .replace(":", "")
        .replace("@", "")
    )


def codeToName(string: str):

    out = ""
    for s in string.split("/"):
        if s in traitNames:
            out += traitNames[s]
        else:
            out += s
    return out


def parseWheelOfFortune(string: str):

    if string is None:
        return ""

    return (
        string.replace("/ ", "/")
        .replace(" /", "/")
        .replace("> ", ">")
        .replace(" >", ">")
    )


def parseChampItems(string: str):

    if string is None:
        return ""

    string = format(string)

    index = 0
    words = string.split()
    out = ""
    if not any([item in champions for item in words[0].replace(star, "").split("/")]):
        return "notValid"

    while index < len(words):
        temp = words[index].strip()
        starless = temp.replace(star, "")
        if any([item in champions for item in starless.split("/")]):
            temp += champItemSep
            temp = champLineSep + temp
        index += 1
        out += temp
    return out[1:]


def parseComps(string: str):
    if string is None:
        return ""
    level = int(string[1])
    champs = string[4:].replace("-", " ").split()

    traits: Dict[str:int] = {}

    for champ in champs:
        if champ in champions:
            items = champions[champ]

            for item in items:
                if item in traits:
                    traits[item] += 1
                else:
                    traits[item] = 1
        else:
            for trait in traitMinLevels.keys():

                if f"[{trait}]" in champ:
                    if trait in traits:
                        traits[trait] += 1
                    else:
                        traits[trait] = 1

    return f'{level}+{",".join(champs)}+{",".join( str(val) + "-"+key for (key,val) in traits.items() if val >= traitMinLevels[key])}'


def parseComments(comment: str):
    if comment is None:
        return ""

    if "Slowroll" in comment:
        comment = format(comment)

        comment.replace("\n", " ")

        items = re.findall(r"L[1-9](?:\/L[1-9])?\s?[\w\/]*", comment)

        out = "slowRoll|"
        for item in items:
            level, champs = item.split()

            if any([c not in champions for c in champs.split("/")]):
                out += "(trait)|"
            else:
                out += "(champs)|"

            out += level + "|" + champs + "*"
        return out[:-1]

    champItem = parseChampItems(comment)
    if champItem != "notValid":
        return "champItems|" + champItem

    comment = re.sub("L(?=[1-9])", "Level ", comment)

    for key, val in traitNames.items():
        comment = comment.replace(key, val)
    return comment.strip().replace("\n", "|")


def parseAll():

    wb = openpyxl.load_workbook(NAME, read_only=True)
    mainSheet = wb["11.18"]

    compNamesCells = mainSheet["A2":"A39"]
    compData = mainSheet["K2":"S39"]

    out = ""
    # for i in range(0, len(compNamesCells), 2):
    #     if compNamesCells[i][0].value is not None:

    #         temp = format(compNamesCells[i][0].value) + "&"
    #         temp += parseComps(compData[i][0].value) + "&"
    #         temp += parseComps(compData[i + 1][0].value) + "&"
    #         temp += parseChampItems(compData[i][2].value) + "&"
    #         temp += parseChampItems(compData[i][3].value) + "&"
    #         temp += parseChampItems(compData[i][4].value) + "&"
    #         temp += parseComments(compData[i][5].value) + "&"
    #         temp += parseWheelOfFortune(compData[i][6].value) + "\n"
    #         out += temp

    i = 0

    while i < 38:
        print(i)
        if compNamesCells[i][0].value is not None:
            temp = format(compNamesCells[i][0].value) + "&"
            temp += parseComps(compData[i][0].value) + "&"
            temp += (
                parseComps(compData[i + 1][0].value)
                if compNamesCells[i + 1][0].value is None
                else ""
            ) + "&"
            temp += parseChampItems(compData[i][2].value) + "&"
            temp += parseChampItems(compData[i][3].value) + "&"
            temp += parseChampItems(compData[i][4].value) + "&"
            temp += parseComments(compData[i][5].value) + "&"
            temp += parseWheelOfFortune(compData[i][6].value) + "\n"
            if compData[i][0].value is not None:
                out += temp
        i += (
            2
            if (compNamesCells[i][0].value is None)
            and (compNamesCells[i][0].value is not None)
            else 1
        )

    return out


with open("output1.txt", "w", encoding="utf-8") as p:
    p.write(parseAll())


class MyWebServer(socketserver.BaseRequestHandler):
    def handle(self):
        self.data = self.request.recv(1024).strip()

        print("Got a request of: %s\n" % self.data)
        with open("stuff.txt", "a") as p:
            p.write("Got a request of: %s\n" % self.data)

        self.request: socket.socket = self.request

        with open("stuff.txt", "a") as p:
            p.write("preparing data.")

        try:
            data = parseAll()
        except Exception as e:
            with open("stuff.txt", "a") as p:
                p.write(str(e))
                data = "bruh"
        with open("stuff.txt", "a") as p:
            p.write("data ready.")

        self.request.sendall(
            bytearray(
                f"HTTP/1.1 200 OK\n\n {data}",
                "utf-8",
            )
        )
        with open("stuff.txt", "a") as p:
            p.write("data sent.")
            
        sys.exit(0)


if __name__ == "__main__":

    print("starting")
    sys.stdout.flush()
    with open("stuff.txt", "w") as p:
        p.write("Got a request of: %s\n")
    HOST, PORT = "localhost", 8080

    socketserver.TCPServer.allow_reuse_address = True
    # Create the server, binding to localhost on port 8080
    server = socketserver.TCPServer((HOST, PORT), MyWebServer)

    # Activate the server; this will keep running until you
    # interrupt the program with Ctrl-C
    server.serve_forever()
