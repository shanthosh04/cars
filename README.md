# Aufgabe: Car und ElectricCar Klassen in JavaScript

## Aufgabe

Schreiben Sie eine Klasse namens `Car`, die folgende Anforderungen erfüllt:

- Der Konstruktor muss als Parameter `brand` (Marke), `model` (Modell), `yearOfManufacture` (Baujahr) und `seats` (Sitzplätze) annehmen.
- Der Parameter `yearOfManufacture` ist optional und soll den Standardwert `null` haben.
- Der Parameter `seats` ist optional und soll den Standardwert `5` haben.
- Speichern Sie die Parameter in gleichnamigen Eigenschaften!
- Schreiben Sie in der Klasse eine Funktion namens `getDescription()`, die Marke, Modell, Baujahr und Anzahl Sitzplätze als mehrzeiligen String zusammensetzt und zurückgibt.
  - Beispiel eines Rückgabewerts:
    ```
    Ford Model T, 1925
    Seats: 5
    ```

Schreiben Sie danach noch die Klasse `ElectricCar`, die aus `Car` erbt und im Konstruktor zusätzlich den Parameter `batteryRange` (Batteriereichweite) als Zahl annimmt (ohne Einheit). 

- Erweitern Sie die `getDescription()`-Funktion, damit sie in der Klasse `ElectricCar` auch die Batteriereichweite und die Einheit (km) der Beschreibung hinzufügt.
  - Beispiel eines Rückgabewerts:
    ```
    Nissan Leaf, 2019
    Seats: 5
    Battery range: 270 km
    ```

Kommentieren Sie alle Klassen und Funktionen korrekt!
