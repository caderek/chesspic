const piecesStyles = [
  "tatiana",
  "tatiana_wood",
  "tatiana_calm",
  "tatiana_sweet",
  "staunty",
  "staunty_wood",
  "staunty_blue",
  "staunty_lila",
  "libra",
  "libra_wood",
  "libra_plum",
  "libra_sea",
  "governor_bw",
  "governor",
  "governor_patina",
  "governor_purple",
  "riohacha",
  "riohacha_spring",
  "riohacha_winter",
  "riohacha_cute",
  "gioco",
  "gioco_wood",
  "gioco_metal",
  "gioco_purple",
  "alpha",
  "alpha_ink",
  "alpha_wood",
  "alpha_mint",
  "anarchy",
  "anarchy_candy",
  "anarchy_fresh",
  "anarchy_sepia",
  "california",
  "california_brown",
  "california_green",
  "california_red",
  "dubrovny_bw",
  "dubrovny",
  "dubrovny_brown",
  "dubrovny_green",
  "cburnett",
  "cburnett_brown",
  "cburnett_blue",
  "cburnett_purple",
  "cases",
  "cases_cocoa",
  "cases_gray",
  "cases_forest",
  "smart",
  "smart_apricot",
  "smart_blue",
  "smart_cocoa",
  "chessnut",
  "chessnut_blue",
  "chessnut_brown",
  "chessnut_burgundy",
  "maestro",
  "maestro_blue",
  "maestro_pink",
  "maestro_brown",
  "merida",
  "merida_ink",
  "merida_cyan",
  "merida_traffic",
  "cardinal",
  "cardinal_blue",
  "cardinal_brown",
  "cardinal_green",
  "companion",
  "companion_red",
  "companion_cyan",
  "companion_eggplant",
  "pirouetti",
  "pirouetti_mint",
  "pirouetti_summer",
  "pirouetti_dream",
  "pirouetti_border",
  "pirouetti_border_winter",
  "pirouetti_border_coral",
  "pirouetti_border_grass",
  "horsey",
  "horsey_blue",
  "horsey_purple",
  "horsey_pink",
  "fresca",
  "fresca_matisse",
  "fresca_zucchini",
  "fresca_camelot",
  "kosal",
  "kosal_blue",
  "kosal_violet",
  "kosal_red",
  "magnetic",
  "magnetic_brown",
  "magnetic_lila",
  "magnetic_orange",
  "maya",
  "maya_brown",
  "maya_warm",
  "maya_cold",
  "pixel",
  "pixel_spring",
  "pixel_neon",
  "pixel_juicy",
  "fantasy",
  "fantasy_calm",
  "fantasy_warm",
  "fantasy_cold",
  "chess7",
  "chess7_pink",
  "chess7_calm",
  "chess7_yellow",
  "regular",
  "regular_ink",
  "regular_green",
  "regular_purple",
  "condal",
  "condal_cold",
  "condal_warm",
  "condal_mustard",
  "mediaeval",
  "mediaeval_brown",
  "mediaeval_green",
  "mediaeval_orange",
  "reillycraig",
  "reillycraig_tamarind",
  "reillycraig_lawn",
  "reillycraig_dixie",
  "tfb",
  "tfb_brown",
  "tfb_green",
  "tfb_purple",
  "icpieces",
  "icpieces_blue",
  "icpieces_maroon",
  "icpieces_brown",
  "leipzig",
  "leipzig_niagara",
  "leipzig_berry",
  "leipzig_nature",
  "motif",
  "motif_maroon",
  "motif_purple",
  "motif_green",
  "marroquin",
  "marroquin_rajah",
  "marroquin_eggplant",
  "marroquin_toy",
  "harlequin",
  "harlequin_gold",
  "harlequin_peach",
  "harlequin_neon",
  "lucena",
  "lucena_brown",
  "lucena_blue",
  "lucena_pink",
  "mark",
  "mark_brown",
  "mark_grape",
  "mark_green",
  "wisdom",
  "wisdom_brown",
  "wisdom_blue",
  "wisdom_grape",
  "adventurer",
  "adventurer_brown",
  "adventurer_grass",
  "adventurer_berry",
  "alfonso-x",
  "alfonso-x_brown",
  "alfonso-x_grape",
  "alfonso-x_toy",
  "berlin",
  "berlin_blue",
  "berlin_maroon",
  "berlin_loulou",
  "kingdom",
  "kingdom_blue",
  "kingdom_brown",
  "kingdom_sulu",
  "traveller",
  "traveller_brown",
  "traveller_blue",
  "traveller_green",
  "line",
  "line_berry",
  "line_purple",
  "line_toy",
  "pirat",
  "pirat_sea",
  "pirat_maroon",
  "pirat_peach",
  "spatial",
  "spatial_blue",
  "spatial_salmon",
  "spatial_summer",
  "symmetric",
  "symmetric_blue",
  "symmetric_brown",
  "symmetric_purple",
  "utrecht",
  "utrecht_mirage",
  "utrecht_violet",
  "utrecht_crimson",
  "dmuys",
  "dmuys_marzipan",
  "dmuys_kournikova",
  "dmuys_cotton",
  "millennia",
  "millennia_blue",
  "millennia_sand",
  "millennia_green",
  "shapes",
  "shapes_blue",
  "shapes_brown",
  "shapes_cute",
  "letters",
  "letters_warm",
  "letters_cold",
  "letters_dim",
  "checkers",
  "checkers_wood",
  "checkers_grape",
  "checkers_cute",
] as const;

export const pieceNames = [
  "bb",
  "bw",
  "kb",
  "kw",
  "nb",
  "nw",
  "pb",
  "pw",
  "qb",
  "qw",
  "rb",
  "rw",
] as const;

export type PiecesStyle = typeof piecesStyles[number];

export type PieceName = typeof pieceNames[number];

export default piecesStyles;
