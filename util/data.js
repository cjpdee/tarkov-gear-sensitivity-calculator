export const extractTable = ({ htmlPage, tablePos }) => {
  const tableMatrix = htmlPage
    .match(/<tbody(.*?)>(.*?)<\/tbody>/gms)
    [tablePos].match(/<tr(.*?)>(.*?)<\/tr>/gms) // isolate into rows
    .map((row) => row.match(/<td>(.*?)<\/td>|<th>(.*?)<\/th>/gms))
    .filter((row) => row)
    .map((row) =>
      row.map((datum) =>
        datum.replace(
          /<td>|<\/td>|<th>|<\/th>|<font color="red">|<font color="yellow">|<font color="green">|<\/font>|<a(.*?)>|<\/a>|\\n/gms,
          ""
        )
      )
    )
    .filter((row) => row);

  return tableMatrix;
};

const CUSTOM_IMG_NAMES = [
  {
    alt: "SHPM Firefighter&#39;s helmet icon.png",
    img: "SHPM_Firefighters_helmet_icon.webp",
  },
];

const extractImageAlt = (row) => {
  const res =
    !!row && !!row[0] && row[0].match(/ alt="(.*?)"/)
      ? row[0]
          .match(/ alt="(.*?)"/)[0]
          .replace(/ alt="/, "")
          .replace('"', "")
      : "";

  const replacement = CUSTOM_IMG_NAMES.find((entry) => entry.alt === res);
  if (replacement) return replacement.img;

  return res;
};

export const mapArmorVestsData = (tableMatrix) => {
  return tableMatrix
    .map((row) => ({
      img: extractImageAlt(row),
      name: row[1] || null,
      class: parseInt(row[2]),
      material: row[3] || null,
      armorZones: row[4] || null,
      durability: parseInt(row[5]),
      effectiveDurability: parseInt(row[6]),
      movementSpeed: parseFloat(row[7]),
      turnSpeed: parseFloat(row[8]),
      ergonomics: parseInt(row[9]),
    }))
    .filter((row) => !!row.name && !!row.img);
};

export const mapRigsData = (tableMatrix) =>
  tableMatrix
    .map((row) => ({
      img: extractImageAlt(row),
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
    }))
    .filter((row) => !!row.name && !!row.img);

export const mapHelmetsData = (tableMatrix) =>
  tableMatrix
    .map((row) => {
      console.log(row);
      return {
        img: extractImageAlt(row),
        name: row[1] || null,
        armorClass: parseInt(row[2]),
        armorSegments: row[3] || null,
        durability: parseInt(row[4]),
        ricochetChance: null, // isn't appearing in results for some reason
        movementSpeed: parseFloat(row[5]),
        turnSpeed: parseFloat(row[6]),
        ergonomics: parseFloat(row[7]),
        soundReduction: row[8] || null,
        blocksHeadset: row[9] === "Yes",
      };
    })
    .filter((row) => !!row.name && !!row.img);

export const mapVisorsData = (tableMatrix) =>
  tableMatrix
    .map((row) => ({
      img: extractImageAlt(row),
      name: row[1],
      armorClass: parseInt(row[2]),
      armorSegments: row[4] || null,
      durability: parseInt(row[5]),
      ricochetChance: row[6] || null,
      turnSpeed: parseFloat(row[7]),
      ergonomics: parseFloat(row[8]),
      blindnessProtection: row[9] || null,
    }))
    .filter((row) => !!row.name && !!row.img);
