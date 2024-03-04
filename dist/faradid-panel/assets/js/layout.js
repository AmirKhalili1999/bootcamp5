export function openAside() {
  document.getElementById("CYBER_TOOLS_ASIDE").style.display = "block"
  document.getElementById("CYBER_TOOLS_ASIDE").style.width = "265px"
  document.getElementById("CYBER_TOOLS_MAIN").style.paddingRight = "265px"

}

export function closeAside() {
  document.getElementById("CYBER_TOOLS_ASIDE").style.display = "none"
  document.getElementById("CYBER_TOOLS_MAIN").style.paddingRight = "unset"
}

export function openResponsiveAside() {
  document.getElementById("CYBER_TOOLS_ASIDE_RESPONSIVE").style.width = "264px";
  document.getElementById("CYBER_TOOLS_OVERLAY").style.display = "block";
  document.body.style.overflow = "hidden"
}

export function closeResponsiveAside(initial) {
  document.getElementById("CYBER_TOOLS_ASIDE_RESPONSIVE").style.width = "0";
  document.getElementById("CYBER_TOOLS_OVERLAY").style.display = "none";
  if (initial) {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = "initial"
  }
}
