export const extractTable = ({ htmlPage, tablePos }) => {
  const tableMatrix = htmlPage
    .match(/<tbody(.*?)>(.*?)<\/tbody>/gms)
    [tablePos].match(/<tr(.*?)>(.*?)<\/tr>/gms) // isolate into rows
    .map((row) => row.match(/<td>(.*?)<\/td>|<th>(.*?)<\/th>/gms))
    .filter((row) => row)
    .map((row) =>
      row.map((datum) =>
        datum.replace(
          /<td>|<\/td>|<th>|<\/th>|<font color="red">|font color="yellow">|<\/font>|<a(.*?)>|<\/a>/gms,
          ""
        )
      )
    );

  return tableMatrix;
};

export const mapArmorVestsData = (tableMatrix) =>
  tableMatrix.map((row) => ({
    img: row[0]
      .match(/ alt="(.*?)"/)[0]
      .replace(/ alt="/, "")
      .replace('"', ""),
    name: row[1],
    class: parseInt(row[2]),
    material: row[3],
    armorZones: row[4],
    durability: parseInt(row[5]),
    effectiveDurability: parseInt(row[6]),
    movementSpeed: parseFloat(row[7]),
    turnSpeed: parseFloat(row[8]),
    ergonomics: parseInt(row[9]),
  }));

export const mapRigsData = (tableMatrix) =>
  tableMatrix.map((row) => ({
    img: row[0]
      .match(/ alt="(.*?)"/)[0]
      .replace(/ alt="/, "")
      .replace('"', ""),
    name: row[1],
    layout: null,
    slots: parseInt(row[3]),
    armorClass: parseInt(row[4]),
    material: row[5],
    armorZones: row[6],
    durability: parseInt(row[7]),
    effectiveDurability: parseInt(row[8]),
    movementSpeed: parseFloat(row[9]),
    turnSpeed: parseFloat(row[10]),
    ergonomics: parseFloat(row[11]),
  }));

export const mapHelmetsData = (tableMatrix) =>
  tableMatrix.map((row) => ({
    img: row[0]
      .match(/ alt="(.*?)"/)[0]
      .replace(/ alt="/, "")
      .replace('"', ""),
    name: row[1],
    armorClass: parseInt(row[2]),
    armorSegments: row[3] || null,
    durability: parseInt(row[4]),
    ricochetChance: row[5] || null,
    movementSpeed: parseFloat(row[6]),
    turnSpeed: parseFloat(row[7]),
    ergonomics: parseFloat(row[8]),
    soundReduction: row[9] || null,
    blocksHeadset: row[10] === "Yes",
  }));

export const mapVisorsData = (tableMatrix) =>
  tableMatrix.map((row) => ({
    img: row[0]
      .match(/ alt="(.*?)"/)[0]
      .replace(/ alt="/, "")
      .replace('"', ""),
    name: row[1],
    armorClass: parseInt(row[2]),
    armorSegments: row[4] || null,
    durability: parseInt(row[5]),
    ricochetChance: row[6] || null,
    turnSpeed: parseFloat(row[7]),
    ergonomics: parseFloat(row[8]),
    blindnessProtection: row[9] || null,
  }));
